import React from "react";
import LabelTitle from "../LabelTitle";

const Footer = () => {
  return (
    <div className="w-full h-[200px] bg-gradient-to-t from-purple-400 dark:from-purple-700">
      <div className="flex h-full flex-col items-center justify-center">
        <LabelTitle size="text-6xl" />
        <p className="mx-auto text-sm text-white">Copyright@juanPWT</p>
      </div>
    </div>
  );
};

export default Footer;
