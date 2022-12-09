import React from "react";
import Carousel from "nuka-carousel";
import { useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrent] = useState(0);
  return (
    <Carousel
      style={{ border: "1px solid #2E2" }}
      slidesToShow={4}
      renderTopCenterControls={() => <div />}
      renderBottomCenterControls={() => <div />}
      renderCenterLeftControls={({ previousSlide }) => (
        <button
          style={{ position: "absolute", bottom: 0, left: -25 }}
          onClick={previousSlide}
        >
         {"<"}
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button
          style={{ position: "absolute", bottom: 0, right: -25  }}
          onClick={nextSlide}
        >
          {">"}
        </button>
      )}
      slideIndex={currentIndex}
      afterSlide={(slideIndex) => setCurrent(slideIndex)}
    >
      <img
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1"
        alt="haha"
        style={{ width: 100, height: 100 }}
      />
      <img
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2"
        alt="haha"
        style={{ width: 100, height: 100 }}
      />
      <img
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3"
        alt="haha"
        style={{ width: 100, height: 100 }}
      />
      <img
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4"
        alt="haha"
        style={{ width: 100, height: 100 }}
      />
      <img
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5"
        alt="haha"
        style={{ width: 100, height: 100 }}
      />
      <img
        src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6"
        alt="haha"
        style={{ width: 100, height: 100 }}
      />
    </Carousel>
  );
};

export default Slider;
