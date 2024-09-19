import { Avia } from "@cbsinteractive/avia-js-react";
import { useState, useRef } from "react";
import { usePauseWhenOutOfView } from "./hooks";

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

  usePauseWhenOutOfView(playerRef);

  return (
    <div className="video-background" ref={playerRef}>
      <Avia
        options={options}
        resource={resource}
        onError={(error) => console.log(error)}
        controls={false}
        dash={false}
        fw={false}
        gam={false}
        debug
        hls
      />
    </div>
  );
}

export default App;
