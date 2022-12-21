import React, { useState } from "react";

/* import Burger from "../../assets/img/burger.png";
import Coffe from "../../assets/img/coffee.png";
import Cake from "../../assets/img/cakes.png"; */
import MenuItem from "./MenuItem";
import { menu } from "./data";
import "./menuList.css";

const MenuList = ({ items, title }) => {
  const [itemSelected, setSelected] = useState(menu);
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
    setOpen(!open);
  };
  const filters = ["Show All", "Starters", "Salads", "Specialty"];
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

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              {filters.map((f) => (
                <li key={f} onClick={() => onChangeFilter(f)}>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row menu-container">
          {itemSelected.map((e) => (
            <MenuItem
              key={e.name}
              onClick={onClickItem}
              name={e.name}
              price={e.price}
              description={e.description}
              className={open ? "open-item" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuList;
