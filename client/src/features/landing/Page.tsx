import * as React from "react";
import Navbar from "../../components/layout/Navbar";
import Hero from "./component/Hero";
import Product from "../product/Products";
import Footer from "../../components/layout/Footer";
import Stat from "./component/Stat";

const Landing = () => {
  return (
    <>
      <div className=" flex flex-col min-h-screen justify-between ">
        <div className="w-full  fixed top-0 z-50 ">
          <Navbar />
        </div>
        <div className="container mx-auto my-20 z-0">
          <Hero />
          <div className="mx-1">
            <Product />
          </div>
          <div className="">
            <Stat />
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Landing;
