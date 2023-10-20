import React from "react";

interface size {
  size: string;
}

const LabelTitle: React.FC<size> = ({ size }) => {
  return (
    <h1
      className={`mx-auto bg-gradient-to-r from-fuchsia-400 via-pink-400 to-orange-400 font-bold ${size} text-transparent bg-clip-text`}
    >
      YOO.
    </h1>
  );
};

export default LabelTitle;
