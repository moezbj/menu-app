import React, { useState } from "react";
import Carousel from "nuka-carousel";
import MenuList from "../menuList/MenuList";
import classNames from "../../utils/classNames";
import TestModel from "../../assets/ar/gateau.glb";
import "./nav.css";

const MenuItems = [
  { title: "Burger", index: 0, model: "../../assets/ar/gateau.glb" },
  { title: "Burger chicken", index: 1, model: TestModel },
  { title: "Burger meat", index: 2, model: TestModel },
  { title: "Burger Double cheese & chicken", index: 3, model: TestModel },
  { title: "Burger cheese", index: 4, model: TestModel },
  { title: "Burger Double cheese", index: 5, model: TestModel },
];
const SnacksItems = [
  { title: "Snack-1", index: 0 },
  { title: "Snack-2", index: 1 },
  { title: "Snack-3", index: 2 },
  { title: "Snack-4", index: 3 },
  { title: "Snack-5", index: 4 },
  { title: "Snack-6", index: 5 },
  { title: "Snack-7", index: 6 },
  { title: "Snack-8", index: 7 },
  { title: "Snack-9", index: 8 },
  { title: "Snack-10", index: 9 },
  { title: "Snack-11", index: 10 },
];
const DrinksItems = [
  { title: "Fanta", index: 0 },
  { title: "Coca-cola", index: 1 },
  { title: "Pepsi", index: 2 },
];
const items = [
  { title: "Menu", index: 0, items: MenuItems },
  { title: "Snacks", index: 1, items: SnacksItems },
  { title: "Drinks", index: 2, items: DrinksItems },
];

const Nav = ({ open }) => {
  const [currentIndex, setCurrent] = useState(0);
  const onChangeIndex = (index) => setCurrent(index);
  return (
    <div className={classNames("nav-container", open ? "open-nav" : "")}>
      <div className="items-container">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="item-container"
            onClick={() => onChangeIndex(i)}
          >
            <span
              className={`item-text ${
                currentIndex === item.index ? "selected-item-color" : ""
              }`}
            >
              {item.title}
            </span>
            <div
              className={`bar-item ${
                currentIndex === item.index ? "selected-item" : ""
              }`}
            >
              <div
                className={`circle-item ${
                  currentIndex === item.index ? "selected-item" : ""
                }`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-container">
        <div className="circle-carousel intro-circle-1" />
        <div className="circle-carousel intro-circle-2" />
        <div className="circle-carousel intro-circle-3" />
        <div className="circle-carousel intro-circle-4" />
        <Carousel
          style={{ backgroundColor: "transparent" }}
          slidesToShow={1}
          renderTopCenterControls={() => <div />}
          renderBottomCenterControls={() => <div />}
          renderCenterLeftControls={() => <div />}
          renderCenterRightControls={() => <div />}
          slideIndex={currentIndex}
          dragging={true}
          afterSlide={(slideIndex) => setCurrent(slideIndex)}
        >
          {items.map((item) => (
            <MenuList key={item.title} items={item.items} title={item.title}  />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Nav;
