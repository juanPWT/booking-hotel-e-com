import React from "react";
import { rupiah } from "../../../hook/formater-currency";

interface childDataBookingProps {
  dataBooking: {
    typeId: number;
    roomName: string;
    imageCover: string;
    startDate: string;
    endDate: string;
    totalPrice: number;
  };
}

const DataBooking: React.FC<childDataBookingProps> = ({ dataBooking }) => {
  return (
    <div className=" h-[340px] flex flex-col bg-white mx-2 rounded-lg shadow-lg">
      <div className="mt-4 flex justify-center items-center ">
        <h1 className="font-semibold text-xl">Data Booking Room</h1>
      </div>
      <div className="mx-4 mt-10 flex flex-col gap-5 xl:justify-center xl:items-center">
        <div className="flex justify-start items-start gap-4 ">
          <span className="text-xl">Type Room: </span>
          <h1 className="font-bold text-xl ">{dataBooking.roomName}</h1>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-lg">Start Date :</span>
            <h1 className="font-bold text-base ">{dataBooking.startDate}</h1>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg">End Date :</span>
            <h1 className="font-bold text-base ">{dataBooking.endDate}</h1>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 gap-5">
          <span className="text-3xl ">Total Price:</span>
          <h1 className="text-xl font-bold">
            {rupiah(dataBooking.totalPrice)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DataBooking;
