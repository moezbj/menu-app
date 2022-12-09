import React from "react";
import "./card.css";
import Arrow from "../../assets/arrow.png";
import Cakes from "../../assets/cakes.png";
import Burgers from "../../assets/burger.png";
import Coffee from "../../assets/coffee.png";

const Items = [
  {
    title: "Cakes",
    image: Cakes,
  },
  {
    title: "Burgers",
    image: Burgers,
  },
  {
    title: "Coffee",
    image: Coffee,
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

const Card = ({ start, onClickStart }) => {
  return (
    <div className={`card-container ${start ? "up-state" : "down-state"}`}>
      <button
        onClick={onClickStart}
        className={`btn-arrow ${start ? "rotateArrowDown" : "rotateArrowUp"}`}
      >
        <img src={Arrow} alt="ez" className="bounce" />
      </button>
      <div className="card">
        <div className="box-wrapper">
          {Items.map((item) => (
            <Box title={item.title} image={item.image} start={start} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
