import { useEffect } from "react";

const usePauseWhenOutOfView = (playerRef) => {
  useEffect(() => {
    if (!playerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.player.play();
          } else {
            window.player.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(playerRef.current);

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [playerRef]);
};

export default usePauseWhenOutOfView;
