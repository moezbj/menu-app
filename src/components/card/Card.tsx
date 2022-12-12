import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import Cakes from "../../assets/img/cakes.png";
import Burgers from "../../assets/img/burger.png";
import Coffee from "../../assets/img/coffee.png";

const Items = [
  {
    title: "Cakes",
    image: Cakes,
    path: "cake",
  },
  {
    title: "Burgers",
    image: Burgers,
    path: "Burgers",
  },
  {
    title: "Coffee",
    image: Coffee,
    path: "Coffe",
  },
];

const Box = ({ image, title, start }) => {
  return (
    <div className={`box-container ${start ? "fadeInBox" : "fadeOutBox"}`}>
      <div className="image-container">
        <img className="image-content" src={image} alt="logo" />
      </div>
      <p className="text-box">{title}</p>
    </div>
  );
};

const Card = ({ start, style, onClickStart }) => {
  return (
    <div className={`card-container ${start ? "up-state" : "down-state"}`}>
      <div className="card">
        <div className="box-wrapper">
          {Items.map((item) => (
            <Link to={item.path}>
              <Box title={item.title} image={item.image} start={start} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
