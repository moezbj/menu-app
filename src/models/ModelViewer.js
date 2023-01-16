import React from "react";
import ModelViewer from "react-ar-viewer";
import "react-ar-viewer/dist/index.css";

const ModelViewerPage = ({
  modelPath,
  modelIos,
  poster,
}) => {
  console.log("haah");
  return (
    <ModelViewer
      buttonImage={"https://picsum.photos/200/200"}
      buttonText={"View"}
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
      shadowSoftness={0}
      autoPlay={true}
    />
  );
};

export default ModelViewerPage;
