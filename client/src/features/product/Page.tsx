import { useEffect, useState } from "react";
import * as fetch from "../../api/index";
import InfoType from "./component/InfoType";
import { typeDetail, userProps } from "../../api/interface/index";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import React from "react";
import jwt from "jwt-decode";
import { Toaster } from "react-hot-toast";

const DetailProduct = () => {
  const [typeDetail, setTypeDetail] = useState<typeDetail>({
    type: {
      name: "",
      price: 0,
      description: "",
      imageURL: "",
    },
    facility: [{ facilityName: "" }],
  });
  const [user, setUser] = React.useState<userProps>({
    email: "",
    id: 0,
    name: "",
    contact: 0,
  });

  const getId = location.pathname.split("/");
  const id = Number(getId[2]);

  useEffect(() => {
    const getTypeById = async () => {
      const get = await fetch.fetchTypeById(id);
      setTypeDetail(get);
    };

    getTypeById();
  }, [id]);

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
      <div className="flex flex-col min-h-screen justify-between">
        <div className="w-full  fixed top-0 z-50 ">
          <Navbar user={user} />
        </div>
        <div className="my-20 mx-auto z-0">
          <InfoType typeDetail={typeDetail} user={user} />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
