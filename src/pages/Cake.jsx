import React from "react";
import ModelViewer from "../models/ModelViewer";
import CakeGlb from "../assets/ar/gateau.glb";
import "./cake.css";

const Cake = () => {
  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "300px",
        }}
      >
        <ModelViewer modelPath={CakeGlb} />
      </div>
    </div>
  );
};

export default Cake;
