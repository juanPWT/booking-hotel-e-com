import React from "react";

const Carousel = () => {
  return (
    <div className="carousel w-full rounded-xl">
      <div id="slide1" className="carousel-item relative w-full group">
        <img
          src="./img/dev/carousel2.jpg"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 hidden group-hover:flex  transition-opacity">
          <a
            href="#slide3"
            className="w-10 h-10 flex rounded-full  bg-gray-200/60 hover:bg-gray-200"
          >
            <span className="m-auto">❮</span>
          </a>
          <a
            href="#slide2"
            className="w-10 h-10 flex rounded-full  bg-gray-200/60 hover:bg-gray-200"
          >
            <span className="m-auto">❯</span>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full group">
        <img
          src="./img/dev/carousel.jpg"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 hidden group-hover:flex  transition-opacity">
          <a
            href="#slide1"
            className="w-10 h-10 flex rounded-full  bg-gray-200/60 hover:bg-gray-200"
          >
            <span className="m-auto">❮</span>
          </a>
          <a
            href="#slide3"
            className="w-10 h-10 flex rounded-full  bg-gray-200/60 hover:bg-gray-200"
          >
            <span className="m-auto">❯</span>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full group">
        <img
          src="./img/dev/carousel1.jpg"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 hidden group-hover:flex  transition-opacity">
          <a
            href="#slide2"
            className="w-10 h-10 flex rounded-full  bg-gray-200/60 hover:bg-gray-200"
          >
            <span className="m-auto">❮</span>
          </a>
          <a
            href="#slide1"
            className="w-10 h-10 flex rounded-full  bg-gray-200/60 hover:bg-gray-200"
          >
            <span className="m-auto">❯</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
