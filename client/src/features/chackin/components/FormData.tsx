import React from "react";
import { userProps } from "../../../api/interface/index";
import DataUser from "./DataUser";
import DataBooking from "./DataBooking";

interface childDataProps {
  user: userProps;
  dataBooking: {
    typeId: number;
    roomName: string;
    imageCover: string;
    startDate: string;
    endDate: string;
    totalPrice: number;
  };
}

const FormData: React.FC<childDataProps> = ({ user, dataBooking }) => {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen">
        <div className="flex flex-col xl:flex-row w-full gap-2 xl:gap-10">
          <DataUser user={user} />
          <div className="my-5 w-full xl:w-[400px] xl:h-[300px]  bg-white rounded-lg p-4">
            <img
              src={dataBooking.imageCover}
              alt="cover room"
              className="h-full  w-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div>
          <DataBooking dataBooking={dataBooking} />
        </div>
      </div>
    </>
  );
};

export default FormData;
