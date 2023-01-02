import React from "react";
import ModelViewer from "react-ar-viewer";
import "react-ar-viewer/dist/index.css";

const ModelViewerPage = ({ modelPath,poster, position = [0, 0, 0] }) => {
  return (
    <ModelViewer
      buttonImage={"https://picsum.photos/200/200"}
      buttonText={"View"}
      width={"100%"}
      height={"100%"}
      src={modelPath}
      iosSrc={"https://model.usdz"}
      poster={poster}
      alt={"Sample usage on component"}
      cameraControls={true}
      ar={true}
      arModes={"quick-look"}
      arScale={"auto"}
    
      exposure={1}
      shadowSoftness={0}
      autoPlay={true}
      autoRotate={true}
      loading={"eager"}
      
    />
  );
};

export default ModelViewerPage;
