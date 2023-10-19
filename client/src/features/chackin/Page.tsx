import React, { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import jwt from "jwt-decode";
import { userProps } from "../../api/interface/index";
import FormData from "./components/FormData";

const Page = () => {
  const [user, setUser] = React.useState<userProps>({
    email: "",
    id: 0,
    name: "",
    contact: 0,
  });

  useEffect(() => {
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
      <div className="flex flex-col min-h-screen justify-between">
        <div className="w-full  fixed top-0 z-50 ">
          <Navbar user={user} />
        </div>
        <div className="container mx-auto my-20 z-0">
          <FormData user={user} />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
