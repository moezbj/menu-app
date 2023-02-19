import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { menu } from "./data";
import Burger from "../../assets/img/burger.svg";
import Donut from "../../assets/img/donut.svg";
import Pizza from "../../assets/img/pizza.svg";

import "./menuList.css";

const MenuList = () => {
  const navigate = useNavigate();
  const [itemSelected, setSelected] = useState(menu);
  const onClickItem = (e) => {
    onNavigate(e);
  };
  const filters = [
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

  const onNavigate = (e) => {
    navigate(
      `/detail/:1?name=${e.name}&model=${e.model}&img=${e.img}&modelIos=${e.modelIos}&price=${e.price}&description=${e.description}`
    );
  };

  return (
    <div id="menu" className="menu">
      <div className="container-menu">
        <div className="section-title">
          <h2>What would you like to order</h2>
        </div>
        <div className="justify-content-center">
          <ul id="menu-flters">
            {filters.map((f,i) => (
              <li key={`${f.name}-${i}`} onClick={() => onChangeFilter(f.title)}>
                <div className="icon_filter">
                  <img src={f.img} alt="icon" className="icon_filter_item" />
                </div>
                {f.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-container">
          {itemSelected.map((e, i) => (
            <MenuItem
              key={`${e.name}-${i}`}
              onClick={() => onClickItem(e)}
              name={e.name}
              price={e.price}
              description={e.description}
              img={e.imgItem}
              model={e.model}
              modelIos={e.modelIos}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
