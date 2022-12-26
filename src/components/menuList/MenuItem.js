import React from "react";
import "./menuList.css";
import "animate.css";
import ModelViewer from "../../models/ModelViewer";
// import modeltest from "../../assets/ar/gateau.glb";
import classNames from "../../utils/classNames";

const MenuItem = ({
  name,
  price,
  description,
  className,
  img,
  model,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        `menu-item animate__animated animate__zoomIn ${
          className ? className : ""
        }`
      )}
    >
      <div className="menu-content">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
         {/*  <img
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
            }}
            src={img}
            alt={name}
          /> */}
          <span>{name}</span>
        </div>

        <span onClick={() => onClick(name)}>{price}</span>
      </div>
      <div className="menu-ingredients">{description}</div>
      <div
        style={{
          width: "100%",
          height: "85%",
        }}
      >
        <ModelViewer modelPath={model} />
      </div>
    </div>
  );
};

export default MenuItem;
