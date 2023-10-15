import React from "react";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <>
      <div className="container flex flex-col  my-10">
        <div>
          <Carousel />
        </div>
        <div className="my-2 mx-5">
          <h1 className="font-bold text-4xl text-gray-700">
            Selamat datang di{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-300 text-transparent bg-clip-text text-5xl">
              YOO.
            </span>
          </h1>
          <p className="text-xl font-semibold my-2 text-gray-700">
            Hotel and Homes terbaik di Dunia karena menyediakan berbagai type
            room dan berbagai fasilitas lengkap ada di{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 text-transparent bg-clip-text text-2xl font-bold">
              YOO
            </span>
            ,
            <span className="text-3xl font-bold">
              {" "}
              Buruan booking sekarang.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
