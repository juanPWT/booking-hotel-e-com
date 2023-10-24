import React from "react";

interface childRateingProps {
  rate: { name: string; rateingAvg: number };
}

const Rateing: React.FC<childRateingProps> = ({ rate }) => {
  const ratelenght = rate.rateingAvg;
  const star = Array.from({ length: ratelenght });

  return (
    <div className="w-full px-4 flex justify-start dark:text-white">
      <h1 className="text-7xl font-bold ">{rate.rateingAvg}</h1>
      {ratelenght === 0 ? (
        <h1 className="text-lg font-semibold my-auto mx-3">
          Belum ada ulasan dan rate
        </h1>
      ) : (
        star.map((_, i) => {
          return (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 my-auto mx-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          );
        })
      )}
    </div>
  );
};

export default Rateing;
