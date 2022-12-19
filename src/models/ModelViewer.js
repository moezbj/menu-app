import React, { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModels";

const ModelViewer = ({ modelPath, position = [0, 0, 0] }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <Canvas camera={{ position: [0, 0, 50], zoom: isTabletOrMobile ? 4 : 6 }}>
      <ambientLight intensity={0.3} />
      <spotLight position={[60, 60, 60]} angle={85.15} penumbra={7} />
      <pointLight position={[60, 60, 60]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
