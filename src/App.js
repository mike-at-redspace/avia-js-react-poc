import { Avia } from "@cbsinteractive/avia-js-react";
import { useState, useRef } from "react";

const usePlausePlayerWhenOutOfView = (playerRef) => {
  if (!playerRef.current) {
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.player.play();
        } else {
          window.player.play();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(playerRef.current);
};

function App() {
  const playerRef = useRef(null);
  const [options] = useState({
    autoplay: "attemptMuted",
  });

  const [resource] = useState({
    location: {
      mediaUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    },
  });

  usePlausePlayerWhenOutOfView(playerRef);

  return (
    <div className="video-background" ref={playerRef}>
      <Avia
        options={options}
        resource={resource}
        onError={(error) => console.log(error)}
        controls={false}
        debug
        dash={false}
        hls={true}
        fw={false}
        gam={false}
      ></Avia>
    </div>
  );
}

export default App;
