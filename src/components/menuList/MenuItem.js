import React from "react";
import "./menuList.css";
import "animate.css";
import ModelViewer from "../../models/ModelViewer";
import modeltest from "../../assets/ar/gateau.glb";
import classNames from "../../utils/classNames";

const MenuItem = ({ name, price, description, className, onClick }) => {
  return (
    <div
      className={classNames(
        `menu-item animate__animated animate__zoomIn ${
          className ? className : ""
        }`
      )}
    >
      <div className="menu-content">
        <span>{name}</span>
        <span onClick={() => onClick(name)}>{price}</span>
      </div>
      <div className="menu-ingredients">{description}</div>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ModelViewer modelPath={modeltest} />
      </div>
    </div>
  );
};

export default MenuItem;
