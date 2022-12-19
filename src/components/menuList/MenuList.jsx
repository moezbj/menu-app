import React, { useState } from "react";
import Modal from "react-modal";
import { useMediaQuery } from "react-responsive";

import Burger from "../../assets/img/burger.png";
import Coffe from "../../assets/img/coffee.png";
import Cake from "../../assets/img/cakes.png";
import ModelViewer from "../../models/ModelViewer";
import TestModel from "../../assets/ar/gateau.glb";

import "./menuList.css";
const customStyles = {
  content: {
    padding: 10,
    inset: 22,
  },
};

const MenuList = ({ items, title }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const [itemSelected, setSelected] = useState(null);
  const renderImg = () => {
    let logo = Burger;
    switch (title) {
      case "Menu": {
        logo = Burger;
        break;
      }
      case "Snacks": {
        logo = Cake;
        break;
      }
      case "Drinks": {
        logo = Coffe;
        break;
      }
      default: {
        logo = Burger;
      }
    }
    return logo;
  };
  const [open, setOpen] = useState(false);
  const onClickItem = (e) => {
    setSelected(e);
    setOpen(!open);
  };

  return (
    <div
      style={{
        overflow: "scroll",
        height: "490px",
        position: "relative",
      }}
    >
      <ul className="ch-grid">
        {items.map((e, index) => (
          <li key={`${e.title}-${index}`}>
            <div className="ch-item" onClick={() => onClickItem(e)}>
              <img src={renderImg()} alt="b" className="ch-img" />
              <div className="ch-info">
                <h3>{e.title}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={customStyles}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div
            style={{
              color: "black",
              cursor: "pointer",
              alignSelf: "flex-end",
            }}
            onClick={onClickItem}
          >
            X Close
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: isTabletOrMobile ? "column" : "row",
              flex: 1,
            }}
          >
            <div
              style={{
                width: isTabletOrMobile ? "100%" : "50%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ModelViewer modelPath={TestModel} />
            </div>
            <div
              style={{
                width: isTabletOrMobile ? "100%" : "50%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: isTabletOrMobile ? "flex-start" : "center",
              }}
            >
              {itemSelected?.title}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MenuList;
