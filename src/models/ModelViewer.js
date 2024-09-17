import React, { useEffect, useRef, useState } from "react";
import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import { ModelViewer } from "@r2u/react-ar-components";

// import "react-ar-viewer/dist/index.css";

const ModelViewerPage = ({ modelPath, modelIos, poster }) => {
  const [handDetected, setHandDetected] = useState(false);
  const [handPosition, setHandPosition] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const camera = useRef(null);

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
    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 2,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.5,
    });

    hands.onResults(handleHandResults);

    const camera = new Camera(videoRef.current, {
      onFrame: async () => {
        await hands.send({ image: videoRef.current });
      },
      width: 640,
      height: 480,
    });

    camera.start();

    return () => {
      camera.stop();
    };
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
      <video ref={videoRef} style={{ display: "none" }} />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {handDetected && handPosition && (
        <ModelViewer
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
      )}
    </div>
  );
};

export default ModelViewerPage;
