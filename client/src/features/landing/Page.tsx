import * as React from "react";
import Navbar from "../../components/layout/Navbar";
import Hero from "./component/Hero";
import Product from "../product/Products";
import Footer from "../../components/layout/Footer";
import Stat from "./component/Stat";
import { Toaster } from "react-hot-toast";
import { userProps } from "../../api/interface/index";
import jwt from "jwt-decode";

const Landing = () => {
  const [user, setUser] = React.useState<userProps>({
    email: "",
    id: 0,
    name: "",
    contact: 0,
  });

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decodeToken: any = jwt(token);
      setUser({
        email: decodeToken.email,
        id: decodeToken.uid,
        name: decodeToken.name,
        contact: decodeToken.contact,
      });
    }
  }, []);

  return (
    <>
      <Toaster />
      <div className=" flex flex-col min-h-screen justify-between ">
        <div className="w-full  fixed top-0 z-50 ">
          <Navbar user={user} />
        </div>
        <div className="container mx-auto my-14 z-0">
          <Hero />
          <div className="mx-1">
            <Product user={user} />
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
