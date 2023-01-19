import React from "react";
import "./menuList.css";
import "animate.css";
import ModelViewer from "../../models/ModelViewer";
import classNames from "../../utils/classNames";

const MenuItem = ({
  name,
  price,
  description,
  className,
  img,
  model,
  onClick,
  modelIos,
}) => {
  return (
    <div
      className={classNames(
        `menu-item animate__animated animate__zoomIn ${
          className ? className : ""
        }`
      )}
    >
      <div onClick={() => onClick(name)} className="menu-content">
        <span>{name}</span>

        <span>{price}</span>
      </div>
      <div className="menu-ingredients">{description}</div>
      <div
        style={{
          width: "100%",
          height: "85%",
        }}
      >
        <ModelViewer modelPath={model} poster={img} modelIos={modelIos} />
      </div>
    </div>
  );
};

export default MenuItem;
