import React, { useEffect, useRef, useState } from "react";
import * as hands from "@mediapipe/hands";
import { Camera } from '@mediapipe/camera_utils';
import ARViewer from "react-ar-viewer";

const ModelViewerPage = ({ modelPath, modelIos, poster }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const ctx = useRef(null);  const arViewerRef = useRef(null);
  const [handPosition, setHandPosition] = useState("");
  const [handDetected, setHandDetected] = useState(false);

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
  }
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
          // Process hand landmarks here
          // Example: Draw landmarks on the canvas
          ctx.current.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          hand.forEach((landmark) => {
            ctx.current.beginPath();
            ctx.current.arc(
              landmark.x * canvasRef.current.width,
              landmark.y * canvasRef.current.height,
              5,
              0,
              2 * Math.PI
            );
            ctx.current.fill();
          });
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
  const handleHandResults = (results) => {
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      const handLandmarks = results.multiHandLandmarks[0]; // First detected hand
      const wristPosition = handLandmarks[0]; // Position of the wrist (Landmark index 0 is the wrist)
      setHandDetected(true);
      setHandPosition(wristPosition); // Save wrist position to render object
    } else {
      setHandDetected(false);
    }
  };
  console.log("haah");

  return (
    <div>
      <video ref={videoRef} style={{ display: "none" }} autoPlay></video>
      <canvas ref={canvasRef} width="640" height="480" style={{ position: 'absolute', top: 0, left: 0 }}></canvas>

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
      />

      {/* <ModelViewer
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
      /> */}
    </div>
  );
};

export default ModelViewerPage;
