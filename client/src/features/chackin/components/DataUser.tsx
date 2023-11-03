import React from "react";
import { userProps } from "../../../api/interface/index";

interface childUserProps {
  user: userProps;
}

const DataUser: React.FC<childUserProps> = ({ user }) => {
  return (
    <>
      <div className="w-full h-80 bg-base-100 my-5  text-gray-700 rounded-xl shadow-lg flex md:w-[500px] md:h-[300px]">
        <div className="w-full h-full flex flex-col">
          <div className="mx-auto my-4">
            <h1 className="text-2xl font-semibold">Data Penyewa</h1>
          </div>
          <div
            className="mt-5 mx-5  h-auto
           flex gap-10"
          >
            <div className="flex flex-col mx-auto  justify-center items-center">
              <span className="font-normal text-sm ">Atas nama </span>
              <h1 className="mt-2 font-bold text-xl">{user.name}</h1>
            </div>
            <div className="flex flex-col mx-auto  justify-center items-center">
              <span className="font-normal text-sm ">Email </span>
              <h1 className="mt-2 font-bold text-xl">{user.email}</h1>
            </div>
          </div>
          <div
            className="mt-10 mx-5  h-auto
           flex gap-10"
          >
            <div className="flex flex-col mx-4  justify-center items-center">
              <span className="font-normal text-sm ">Contact</span>
              <h1 className="mt-2 font-bold text-xl">{user.contact}</h1>
            </div>
            <div className="flex flex-col mx-auto  justify-center items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataUser;
