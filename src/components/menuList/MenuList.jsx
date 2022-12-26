import React, { useState } from "react";

import MenuItem from "./MenuItem";
import { menu } from "./data";
import "./menuList.css";

const MenuList = ({ items, title }) => {
  const [itemSelected, setSelected] = useState(menu);
  const [itemMenu, setItemMenu] = useState(menu);

  /*   const renderImg = () => {
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
  }; */
  const [open, setOpen] = useState(false);
  const onClickItem = (e) => {
    setItemMenu(e);
    setOpen(!open);
  };
  const filters = ["Show All", "Pizza", "Desert", "Plat"];
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
          <h2>
            Check our tasty <span>Menu</span>
          </h2>
        </div>

        <div>
          <div className="justify-content-center">
            <ul id="menu-flters">
              {filters.map((f) => (
                <li key={f} onClick={() => onChangeFilter(f)}>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="menu-container">
          {itemSelected.map((e) => (
            <MenuItem
              key={e.name}
              onClick={onClickItem}
              name={e.name}
              price={e.price}
              description={e.description}
              img={e.img}
              model={e.model}
              className={open && e.name === itemMenu ? "open-item" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuList;
