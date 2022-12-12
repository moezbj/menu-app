import React from "react";
import Burger from "../../assets/img/burger.png";
import Coffe from "../../assets/img/coffee.png";
import Cake from "../../assets/img/cakes.png";

import "./menuList.css";

const MenuList = () => {
  return (
    <ul className="ch-grid">
      <li>
        <div className="ch-item">
          <img src={Burger} alt="b" className="ch-img" />
          <div className="ch-info">
            <h3>Vision</h3>
            <p>
              by Daniel Nyari <a href="http://drbl.in/eNXW">View on Dribbble</a>
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="ch-item">
          <img src={Coffe} alt="b" className="ch-img" />

          <div className="ch-info">
            <h3>Vision</h3>
            <p>
              by Daniel Nyari <a href="http://drbl.in/eNXW">View on Dribbble</a>
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="ch-item">
          <img src={Cake} alt="b" className="ch-img" />

          <div className="ch-info">
            <h3>Cylon</h3>
            <p>
              by Daniel Nyari <a href="http://drbl.in/eNXY">View on Dribbble</a>
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default MenuList;
