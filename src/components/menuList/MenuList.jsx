import React, { useState } from "react";

import MenuItem from "./MenuItem";
import { menu } from "./data";
import Burger from "../../assets/img/burger.svg";
import Donut from "../../assets/img/donut.svg";
import Pizza from "../../assets/img/pizza.svg";
import Food from "../../assets/img/food.svg";
import ModelViewer from "../../models/ModelViewer";

import "./menuList.css";

const MenuList = () => {
  const [itemSelected, setSelected] = useState(menu);
  const [itemMenu, setItemMenu] = useState(menu);
  const [open, setOpen] = useState(false);
  const onClickItem = (e) => {
    setItemMenu(e);
    setOpen(!open);
  };
  const filters = [
    { title: "Show All", img: Food },
    { title: "Pizza", img: Pizza },
    { title: "Deserts", img: Donut },
    { title: "Plat", img: Burger },
  ];
  const onChangeFilter = (f) => {
    setSelected(null);

    if (f !== "Show All") {
      let a = menu.filter((m) => m.category === f);
      setSelected(a);
    } else {
      setSelected(menu);
    }
  };

  return (
    <section id="menu" className="menu">
      <div className="container-menu">
        <div className="section-title">
          <h2>What would you like to order</h2>
        </div>
        <div className="justify-content-center">
          <ul id="menu-flters">
            {filters.map((f) => (
              <li key={f} onClick={() => onChangeFilter(f.title)}>
                <div className="icon_filter">
                  <img src={f.img} alt="icon" className="icon_filter_item" />
                </div>
                {f.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-container">
          {itemSelected.map((e) => (
            <MenuItem
              key={e.name}
              onClick={() => onClickItem(e)}
              name={e.name}
              price={e.price}
              description={e.description}
              img={e.img}
              model={e.model}
              modelIos={e.modelIos}
              className={open && e.name === itemMenu ? "open-item" : ""}
            />
          ))}
        </div>
      </div>
      {open && (
        <div className="modal-container animate__slideInRight">
          <div className="icon_close" onClick={() => setOpen(false)}>
            <span>{`X`}</span>
          </div>
          <div className="modal-content">
            <div className="modal_body">
              <h1>{itemMenu.name}</h1>
              <div
                style={{
                  width: 200,
                  height: 200,
                }}
              >
                <ModelViewer
                  modelPath={itemMenu.model}
                  poster={itemMenu.img}
                  modelIos={itemMenu.modelIos}
                />
              </div>
              <div className="description-item">
                <div className="description-name">{itemMenu.name}</div>
                <div className="description-price">{itemMenu.price}</div>
              </div>
              <div className="description-text">{itemMenu.description}</div>
              <button className="btn-order">
                <span>Order Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MenuList;
