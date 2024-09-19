import { Avia } from "@cbsinteractive/avia-js-react";
import { useState, useRef } from "react";

function App() {
  const playerRef = useRef(null);
  const [options] = useState({
    autoplay: "attemptMuted",
  });

  const [resource] = useState({
    location: {
      mediaUrl:
        "https://media.amlg.io/assets/splice_preview/2024/08/27/2344955459581/V-24-1590-06_QPDO_Trailer_1_FL_1920_x_1080_080524_FINAL_2780226_2780226_3133.mp4",
    },
  });

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
