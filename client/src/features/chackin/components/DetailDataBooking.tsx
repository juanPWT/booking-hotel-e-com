import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { detailBookingProps } from "../../../api/interface/index";
import * as fetch from "../../../api/index";
import { rupiah } from "../../../hook/formater-currency";

export const DetailDataBooking = () => {
  const getId = location.pathname.split("/");
  const idBooking = Number(getId[2]);

  const [detail, setDetail] = useState<detailBookingProps>({
    id: 0,
    noRoom: "",
    contact: 0,
    email: "",
    endDate: "",
    startDate: "",
    imageURL: "",
    name: "",
    totalPrice: 0,
    typeName: "",
  });

  useEffect(() => {
    const getDetail = async () => {
      const get = await fetch.getDetaillDataBooking(idBooking);
      setDetail(get.detailData);
    };

    getDetail();
  }, [idBooking]);

  console.log(detail);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <div className=" w-full h-full p-3 xl:p-20 flex flex-col">
          <Link
            to={"/"}
            className="w-16 h-16 shadow-lg rounded-full  bg-base-100 flex justify-center items-center hover:bg-base-200 hover:shadow-emerald-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </Link>
          <div className="mt-5 mb-10 bg-base-100 mx-auto shadow-lg w-full h-full rounded-xl p-5 flex flex-col">
            <div className="w-full flex  mt-2 justify-center items-center">
              <span className="font-bold text-xl">
                {" "}
                Detail Booking Kamar Anda{" "}
              </span>
            </div>
            <hr className="my-5 border-t-2" />
            <span className="font-semibold">kamar</span>
            <hr className="my-5 border-t-2" />
            <div className="mt-2 mb-5 w-full">
              <div className="flex gap-3">
                <span className="font-bold ">NO Kamar :</span>
                <h1>{detail.noRoom}</h1>
              </div>
              <div className="flex gap-3 mt-3">
                <span className="font-bold ">Type Kamar :</span>
                <h1>{detail.typeName}</h1>
              </div>
              <div className="flex flex-col gap-3 mt-3 justify-center items-center">
                <span className="font-bold ">Foto Kamar</span>
                <img
                  src={detail.imageURL}
                  alt="cover"
                  className="w-full h-52 xl:h-[500px] rounded-xl object-cover"
                />
              </div>
              <hr className="my-5 border-t-2" />
              <span className="font-semibold">Tamu</span>
              <hr className="my-5 border-t-2" />
              <div className="flex gap-3">
                <span className="font-bold ">Atas nama :</span>
                <h1>{detail.name}</h1>
              </div>
              <div className="flex gap-3 mt-3">
                <span className="font-bold ">Email :</span>
                <h1>{detail.email}</h1>
              </div>
              <div className="flex gap-3 mt-3">
                <span className="font-bold ">Contact :</span>
                <h1>{detail.contact}</h1>
              </div>
              <hr className="my-5 border-t-2" />
              <span className="font-semibold">
                Tanggal checkin dan checkout
              </span>
              <hr className="my-5 border-t-2" />
              <div className="flex gap-3 mt-3">
                <span className="font-bold ">Checkin :</span>
                <h1>{detail.startDate}</h1>
              </div>
              <div className="flex gap-3 mt-3">
                <span className="font-bold ">Checkout :</span>
                <h1>{detail.endDate}</h1>
              </div>
              <hr className="my-5 border-t-2" />
              <span className="font-bold text-xl justify-center items-center flex">
                Total price
              </span>
              <hr className="my-5 border-t-2" />
              <div className="w h-full font-bold text-3xl flex justify-center items-center">
                {rupiah(detail.totalPrice)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
