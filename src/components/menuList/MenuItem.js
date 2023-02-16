import React from "react";
import "animate.css";
import classNames from "../../utils/classNames";
import "./menuList.css";

const MenuItem = ({ name, price, description, img, onClick }) => {
  return (
    <div className={classNames(`menu-item animate__animated animate__zoomIn `)}>
      <div onClick={() => onClick(name)} className="menu-content">
        <img src={img} alt="img" className="img-food" />
      </div>
      <div className="menu-ingredients">{description}</div>
    </div>
  );
};

export default MenuItem;
