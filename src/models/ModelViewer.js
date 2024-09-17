import React, { useRef, useEffect } from "react";
import { Camera } from "@mediapipe/camera_utils";
import { Hands } from "@mediapipe/hands";
import * as THREE from "three";
import { ARViewer } from "react-ar-viewer";

const HandTrackingModel = (modelPath, modelIos, poster) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const modelRef = useRef(null); // Reference to the 3D model

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1, // Track only one hand
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.5,
    });

    hands.onResults((results) => {
      const canvasCtx = canvasRef.current.getContext("2d");
      canvasCtx.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      if (results.multiHandLandmarks.length > 0) {
        const handLandmarks = results.multiHandLandmarks[0];
        // Calculate position based on hand landmarks and update model position
        const handPosition = handLandmarks[9]; // Example landmark for the center of the hand

        if (modelRef.current) {
          // Convert handPosition to 3D world coordinates and update model position
          modelRef.current.position.set(
            handPosition.x,
            handPosition.y,
            handPosition.z
          );
        }
      }
    });

    if (videoRef.current) {
      const camera = new Camera(videoRef.current, {
        onFrame: async () => {
          await hands.send({ image: videoRef.current });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <video ref={videoRef} style={{ display: "none" }} autoPlay muted></video>
      <canvas
        ref={canvasRef}
        width="640"
        height="480"
        style={{ position: "absolute", top: 0, left: 0 }}
      ></canvas>
      <ARViewer
        src={modelPath} // Path to your .glb file
        style={{ width: "100%", height: "100%" }}
        scale={1}
        ref={modelRef}
      />
    </div>
  );
};

export default HandTrackingModel;
