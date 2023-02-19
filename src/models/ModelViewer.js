import React from "react";
import ModelViewer from "react-ar-viewer";
import "./model.css";
import "react-ar-viewer/dist/index.css";
import ar from '../assets/img/ar1.svg'

const ModelViewerPage = ({ modelPath, modelIos, poster }) => {
  console.log("haah");
  return (
    <ModelViewer
      buttonText={"AR"}
      width={"100%"}
      height={"100%"}
      src={modelPath}
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
      buttonLogo={ar}
    />
  );
};

export default ModelViewerPage;
