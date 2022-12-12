import React, { useState } from "react";
import Carousel from "nuka-carousel";
import classNames from "../../utils/classNames";
import MenuList from "../menuList/MenuList";
import "./nav.css";
const items = [
  { title: "Acceuil", index: 0 },
  { title: "Menu", index: 1 },
  { title: "A propos", index: 2 },
];

const Nav = () => {
  const [currentIndex, setCurrent] = useState(0);
  const onChangeIndex = (index) => setCurrent(index);

  return (
    <div className="nav-container">
      <div className="items-container">
        {items.map((item, i) => (
          <div key={item.title} className="item-container" onClick={() => onChangeIndex(i)}>
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
          afterSlide={(slideIndex) => setCurrent(slideIndex)}
        >
          <div className={classNames("content-pad")}>
            <h2 className="mb-4">About our company</h2>
            <p className="mb-4">
              You are allowed to use Astro Motion HTML Template for your
              websites. vestibulum pellentesque aliquam ultricies, finibus nec
              dui. Donec bibendum enim mi, at tristique leo feugiat at vitae
              blandit est vestibulum sit.
            </p>
            <p>
              Praesent auctor rhoncus arcu, vitae blandit est vestibulum sit
              amet. Integer erat turpis, vestibulum pellentesque aliquam
              ultricies, finibus nec dui. Donec bibendum enim mi, at tristique
              leo feugiat at. Feugiat vitae blandit est vestibulum.
            </p>
          </div>
          <MenuList />
          <img
            src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3"
            alt="haha"
            style={{ width: 100, height: 100 }}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Nav;
