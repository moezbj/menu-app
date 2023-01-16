import React from "react";
import ModelViewer from "react-ar-viewer";
import "react-ar-viewer/dist/index.css";

const ModelViewerPage = ({
  modelPath,
  modelIos,
  poster,
  position = [0, 0, 0],
}) => {
  console.log('haah')
  return (
    <ModelViewer
      buttonImage={"https://picsum.photos/200/200"}
      buttonText={"View"}
      width={"100%"}
      height={"100%"}
      src={modelPath}
      cameraControls={true}
      ar={true}
      arModes='quick-look'
      arScale="auto"
    />
  );
};

export default ModelViewerPage;
