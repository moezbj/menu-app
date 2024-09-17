import React, { useEffect, useRef, useState } from "react";
import * as hands from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import ARViewer from "react-ar-viewer"; // Adjust import based on actual library usage
import "react-ar-viewer/dist/index.css";

const App = (modelPath, modelIos, poster) => {
/*   const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const arViewerRef = useRef(null);
  const [handPosition, setHandPosition] = useState({ x: 0, y: 0 });
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // getUserMedia is supported
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // Do something with the video stream
        console.log("Camera stream started");
        // Example: Attach the stream to a video element
        const video = document.querySelector("video");
        video.srcObject = stream;
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  } else {
    console.error("getUserMedia not supported");
  } */
/*   useEffect(() => {
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
  }, []); */

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <ARViewer
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
   
      />
    </div>
  );
};

export default App;
