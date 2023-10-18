import React from "react";
import { typeDetail, userProps } from "../../../api/interface/index";
import { rupiah } from "../../../hook/formater-currency";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

interface childTypeDetailProps {
  typeDetail: typeDetail;
  user: userProps;
}

const InfoType: React.FC<childTypeDetailProps> = ({ typeDetail, user }) => {
  return (
    <div className="container flex justify-center items-center min-h-screen mx-auto ">
      <div className=" my-2 w-full p-4 flex flex-col xl:flex-row gap-5">
        <img
          src={typeDetail.type.imageURL}
          alt="type image"
          className="w-full h-[300px] mx-auto rounded-2xl object-cover xl:h-[500px] shadow-lg  xl:w-[600px] flex-1"
        />
        <div className="flex-1 ml-4">
          <div className="my-3 flex">
            <h1 className="text-4xl font-semibold m-auto  text-gray-700 dark:text-white">
              {typeDetail.type.name}
            </h1>
            <h2 className="text-2xl font-bold m-auto  text-gray-700 dark:text-yellow-300">
              {rupiah(typeDetail.type.price)}
            </h2>
          </div>
          <div className="w-full flex bg-white rounded-lg p-4 mt-5 shadow-lg">
            <p className="m-auto text-gray-700">
              {typeDetail.type.description}
            </p>
          </div>
          <div className="w-full flex flex-col bg-white rounded-lg p-4 my-2 shadow-lg">
            <h1 className="font-semibold text-lg my-4">Fasiitas</h1>
            <div className="flex">
              <div className="grid grid-cols-7  md:grid-cols-9 gap-2 md:gap-10 ">
                {typeDetail.facility.map((data, i) => {
                  const facilityName =
                    typeof data === "string" ? data : data.facilityName;
                  return (
                    <div
                      key={i}
                      className="badge badge-outline my-5 mx-auto hover:bg-fuchsia-300 hover:text-white"
                    >
                      <span className="">{facilityName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col bg-white rounded-lg p-4 my-2 shadow-lg">
            {user.id === 0 ? (
              <button
                disabled={true}
                onMouseOver={() => {
                  toast("Silahkan login terlebih dahulu", {
                    className: "bg-red-500 font-semibold text-white",
                  });
                }}
                className="m-auto outline outline-yellow-200 px-4 py-2 rounded-xl   text-yellow-200 font-semibold  dark:text-fuchsia-200  dark:outline-fuchsia-200 "
              >
                Booking
              </button>
            ) : (
              <Link
                to={"/"}
                className="m-auto outline outline-yellow-500 px-4 py-2 rounded-xl hover:bg-yellow-500 hover:shadow-lg hover:shadow-ywllow-400 group dark:outline-fuchsia-500 dark:hover:bg-fuchsia-500"
              >
                <span className="text-yellow-500 font-semibold group-hover:text-white dark:text-fuchsia-500">
                  Booking
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoType;
