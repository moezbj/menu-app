import React from "react";
import ModelViewer from "react-ar-viewer";
import "react-ar-viewer/dist/index.css";

const ModelViewerPage = ({
  modelPath,
  modelIos,
  poster,
  position = [0, 0, 0],
}) => {
  return (
    <ModelViewer
      buttonImage={"https://picsum.photos/200/200"}
      buttonText={"View"}
      width={"100%"}
      height={"100%"}
      src={modelPath}
      iosSrc={modelIos}
      poster={poster}
      alt={"Sample usage on component"}
      cameraControls={true}
      ar={true}
      arModes={"scene-viewer"}
      cameraTarget={"0m 1.5m -0.5m"}
      cameraOrbit={"0 deg 0deg 0%"}
      arScale={"auto"}
      autoPlay={true}
      autoRotate={true}
      loading={"eager"}
      shadowSoftness={1}
      exposure={1}
      modelCacheSize={5}
    />
  );
};

export default ModelViewerPage;
