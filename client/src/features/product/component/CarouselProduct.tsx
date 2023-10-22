import React, { useState } from "react";

interface childCarouselProductProps {
  carouselImage: { name: string; image: string }[];
}

const CarouselProduct: React.FC<childCarouselProductProps> = ({
  carouselImage,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? carouselImage.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const next = () => {
    const isLastIndex = currentIndex === carouselImage.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" h-[400px] md:h-[410px] my-2 w-full m-auto pb-6 px-4 relative group">
      <img
        src={`${carouselImage[currentIndex].image}`}
        className="w-full h-full  rounded-2xl bg-center bg-cover lg:object-cover duration-700 transition-all shadow-xl  "
      />
      {/* left arrow  */}
      <div
        onClick={prev}
        className="hidden group-hover:flex absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      {/* right arrow  */}
      <div
        onClick={next}
        className="hidden group-hover:flex absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default CarouselProduct;
