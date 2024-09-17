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
  const [cameraStream, setCameraStream] = useState(null);
  const [cameraInitialized, setCameraInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        console.log("Initializing MediaPipe Hands...");
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
          console.log("Results received:", results);
          if (results.multiHandLandmarks.length > 0) {
            const hand = results.multiHandLandmarks[0];
            console.log("Hand landmarks:", hand);
            const [indexFingerTip] = hand.slice(8, 9); // Tip of the index finger
            if (indexFingerTip) {
              setHandPosition({
                x: indexFingerTip.x * canvasRef.current.width,
                y: indexFingerTip.y * canvasRef.current.height,
              });
            }
          }
        });

        // Only initialize the camera if it hasn't been initialized yet
        if (!cameraInitialized) {
          // Get camera devices
          const devices = await navigator.mediaDevices.enumerateDevices();
          const videoDevices = devices.filter(
            (device) => device.kind === "videoinput"
          );
          const rearCamera =
            videoDevices.find((device) =>
              device.label.toLowerCase().includes("back")
            ) || videoDevices[0]; // Select rear camera or default to the first one

          // Set up video stream
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { deviceId: rearCamera.deviceId },
          });

          videoRef.current.srcObject = stream;
          setCameraStream(stream);
          setCameraInitialized(true);

          const video = videoRef.current;
          const camera = new Camera(video, {
            onFrame: async () => {
              await handsInstance.send({ image: video });
            },
            width: 320,
            height: 320,
          });

          camera.start();
        }
      } catch (error) {
        console.error("Error initializing MediaPipe Hands:", error);
      }
    };

    initialize();

    return () => {
      // Cleanup
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraStream, cameraInitialized]);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        style={{ width: "100%", height: "auto" }}
        autoPlay
        playsInline
        muted
      ></video>
      <canvas
        ref={canvasRef}
        width="320"
        height="320"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      ></canvas>
      <ARViewer
        ref={arViewerRef}
        modelUrl={modelPath}
        style={{
          position: "absolute",
          top: `${handPosition.y}px`,
          left: `${handPosition.x}px`,
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 255, 0, 0.5)", // Semi-transparent green
          zIndex: 0,
        }}
      />
    </div>
  );
};

export default App;
