import React from "react";
import MenuList from "../menuList/MenuList";
import classNames from "../../utils/classNames";
import "./nav.css";

const Nav = ({ open }) => {
  return (
    <div className={classNames("nav-container", open ? "open-nav" : "")}>
      <MenuList />
    </div>
  );
};

export default Nav;
