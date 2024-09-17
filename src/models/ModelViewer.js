import React, { useEffect, useRef, useState } from "react";
import * as hands from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import ARViewer from "react-ar-viewer"; // Adjust import based on actual library usage
import "react-ar-viewer/dist/index.css";

const App = (modelPath, modelIos, poster) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const arViewerRef = useRef(null);
  const [handPosition, setHandPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const initialize = async () => {
      // Initialize MediaPipe Hands
      const handsInstance = new hands.Hands({
        locateFile: (file) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${hands.VERSION}/${file}`,
      });

      handsInstance.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.7,
      });

      handsInstance.onResults((results) => {
        if (results.multiHandLandmarks.length > 0) {
          const hand = results.multiHandLandmarks[0];
          const [indexFingerTip] = hand.slice(8, 9); // Tip of the index finger

          if (indexFingerTip) {
            setHandPosition({
              x: indexFingerTip.x * canvasRef.current.width,
              y: indexFingerTip.y * canvasRef.current.height,
            });
          }
        }
      });

      // Set up video stream
      const video = videoRef.current;
      const camera = new Camera(video, {
        onFrame: async () => {
          await handsInstance.send({ image: video });
        },
        width: 640,
        height: 480,
      });

      camera.start();
    };

    initialize();
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas
        ref={canvasRef}
        width="320"
        height="480"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      ></canvas>
      <ARViewer
        ref={arViewerRef}
        buttonImage={"https://picsum.photos/200/200"}
        buttonText={"View"}
        width={"100%"}
        height={"100%"}
        src={modelPath}
        modelIos={modelPath}
        poster={poster}
        cameraControls={true}
        ar={true}
        arModes="quick-look scene-viewer webxr"
        arScale="auto"
        cameraTarget={"0m 0m 0m"}
        cameraOrbit={"0 deg 0deg 0%"}
        exposure={1}
        shadowSoftness={1}
        shadowIntensity={1}
        autoPlay={true}
        style={{
          position: "absolute",
          top: `${handPosition.y}px`,
          left: `${handPosition.x}px`,
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />
    </div>
  );
};

export default App;
