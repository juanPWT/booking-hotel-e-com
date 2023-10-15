import { useEffect, useState } from "react";
import * as fetch from "../../api/index";
import InfoType from "./component/InfoType";
import { typeDetail } from "../../api/interface/index";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

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

  const getId = location.pathname.split("/");
  const id = Number(getId[2]);

  useEffect(() => {
    const getTypeById = async () => {
      const get = await fetch.fetchTypeById(id);
      setTypeDetail(get);
    };

    getTypeById();
  }, [id]);

  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <div className="w-full  fixed top-0 z-50 ">
          <Navbar />
        </div>
        <div className="my-20 mx-auto z-0">
          <InfoType typeDetail={typeDetail} />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
