import React from "react";
import "react-ar-viewer/dist/index.css";
import ModelViewer from "react-ar-viewer";

const ModelViewerPage = ({ modelPath, position = [0, 0, 0] }) => {
  return (
    <ModelViewer
      buttonImage={"https://picsum.photos/200/200"}
      buttonText={"View in your space"}
      width={"100%"}
      height={"100%"}
      src={modelPath}
      iosSrc={"https://model.usdz"}
      poster={"https://picsum.photos/200/200"}
      alt={"Sample usage on component"}
      cameraControls={true}
      ar={true}
      arModes={"webxr scene-viewer quick-look"}
      arScale={"auto"}
      cameraTarget={"0m 0m 0m"}
      cameraOrbit={"0 deg 0deg 0%"}
      exposure={1}
      shadowSoftness={0}
      autoPlay={true}
      autoRotate={true}
      loading={"eager"}
    />
  );
};

export default ModelViewerPage;
