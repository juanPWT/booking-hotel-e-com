import React, { useEffect, useState } from "react";
import {
  typeDetail,
  userProps,
  roomAvailable,
} from "../../../api/interface/index";
import { rupiah } from "../../../hook/formater-currency";
import { formatDateIndo } from "../../../hook/formater-date";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { addDays } from "date-fns";
import DatePicker from "./DatePicker";
import CarouselProduct from "./CarouselProduct";
import Rateing from "./Rateing";
import Comment from "./Comment";

interface childTypeDetailProps {
  typeDetail: typeDetail;
  user: userProps;
  roomAvailable: roomAvailable;
  carouselImage: { name: string; image: string }[];
  rate: { name: string; rateingAvg: number };
}

const InfoType: React.FC<childTypeDetailProps> = ({
  typeDetail,
  user,
  roomAvailable,
  carouselImage,
  rate,
}) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  //for float card
  const [float, setFloat] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setFloat(
          "xl:fixed xl:w-[600px] xl:top-1/2 xl:left-[1000px] xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2"
        );
      } else {
        setFloat("");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //date
  const startDate = date[0].startDate;
  const endDate = date[0].endDate;
  const formatStartDate = formatDateIndo(startDate);
  const formatEndDate = formatDateIndo(endDate);
  //end of date

  //total price realtime

  const timeDifference = endDate.getTime() - startDate.getTime();
  const numberDays = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));
  const totalPrice = typeDetail.type.price * numberDays;

  //end of total price real time

  return (
    <>
      <div className="container flex flex-col justify-center items-center min-h-screen mx-auto  ">
        <div className=" my-2 w-full p-4 flex flex-col xl:flex-row gap-5">
          <div className=" flex flex-col">
            <img
              src={typeDetail.type.imageURL}
              alt="type image"
              className="w-full h-[300px] mx-auto rounded-2xl object-cover xl:h-[500px] shadow-lg  xl:w-[600px] flex-1"
            />
            <CarouselProduct carouselImage={carouselImage} />
          </div>
          <div className="flex-1 ml-4">
            <div className="my-3 flex bg-white p-4 rounded-lg">
              <h1 className="text-4xl font-semibold m-auto  text-gray-700 ">
                {typeDetail.type.name}
              </h1>
            </div>
            <div className="w-full flex bg-white rounded-lg p-4 mt-5 shadow-lg">
              <p className="m-auto text-gray-700">
                {typeDetail.type.description}
              </p>
            </div>
            <div className="w-full flex flex-col bg-base-200 rounded-lg p-4 my-2 shadow-lg">
              <h1 className="font-semibold text-lg my-4">Fasiitas</h1>
              <div className="flex justify-center">
                <div className="grid grid-cols-7 md:grid-cols-9 gap-4 md:gap-5">
                  {typeDetail.facility.map((facility, index) => (
                    <div
                      key={index}
                      className="w-20 rounded-lg p-2 bg-white shadow-lg hover:shadow-md"
                    >
                      <span className="text-gray-700">
                        {facility.facilityName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* card data important */}
            <div
              className={`w-full flex flex-col bg-white rounded-lg overflow-hidden my-4 shadow-lg ${float}`}
            >
              {user.id === 0 ? (
                <div className="flex w-full gap-2 h-10 bg-gradient-to-r justify-center items-center from-fuchsia-600 via-red-600 to-orange-500">
                  <span className="text-white font-semibold text-sm">
                    Mau booking Login dulu donk...!
                  </span>
                  <Link
                    to={"/auth"}
                    className=" rounded-md px-3 bg-transparent/20 text-white hover:bg-white hover:text-gray-600"
                  >
                    login
                  </Link>
                </div>
              ) : (
                <div className="flex w-full gap-2 h-10 bg-gradient-to-r justify-center items-center from-fuchsia-600 via-red-600 to-orange-500">
                  <span className="text-white font-semibold text-sm">
                    yuk booking sekarang...!
                  </span>
                </div>
              )}

              <div className="w-full p-4">
                <div className="flex gap-5">
                  <h2 className="text-2xl font-bold my-auto  text-gray-700 dark:text-yellow-300">
                    {rupiah(typeDetail.type.price)}{" "}
                    <span className="text-sm">/hari</span>
                  </h2>
                  <span className="my-auto font-semibold text-yellow-400 dark:text-gray-700">
                    0% off
                  </span>
                </div>
                <p className="text-xs my-1">termasuk pajak</p>
              </div>
              <div className="my-1 w-full flex p-4 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                  />
                </svg>
                {roomAvailable.roomAvailable == 0 ? (
                  <>
                    kamar full{" "}
                    <span className="font-bold mx-1 text-gray-900">
                      booking
                    </span>{" "}
                  </>
                ) : (
                  <>
                    tersedia{" "}
                    <span className="font-bold mx-1 text-gray-900">
                      {roomAvailable.roomAvailable}
                    </span>{" "}
                    kamar
                  </>
                )}
              </div>
              <div className="my-1 w-full flex p-4 ">
                <div
                  onClick={() => {
                    const dateModal = document.getElementById(
                      "dateModal"
                    ) as HTMLDialogElement;
                    dateModal.showModal();
                  }}
                  className="mx-3 border-2 cursor-pointer border-gray-400 rounded-lg h-10 w-full  flex "
                >
                  <h1 className="font-semibold m-auto">
                    {formatStartDate} - {formatEndDate}
                  </h1>
                </div>
              </div>

              <hr className="my-2 border-t-2" />
              <div className="my-1 w-full flex p-4 font-bold justify-center">
                <h1 className="mx-3 text-2xl font-md">Total :</h1>
                <h1 className="mx-3 text-2xl ">{rupiah(totalPrice)}</h1>
              </div>
              <hr className="my-2 border-t-2" />
              <div className="flex my-3">
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
                ) : roomAvailable.roomAvailable == 0 ? (
                  <button
                    disabled={true}
                    onMouseOver={() => {
                      toast(
                        "maaf kamar full booking kaka, coba cek type kamar lainya",
                        {
                          className: "bg-yellow-500 font-semibold text-white",
                        }
                      );
                    }}
                    className="m-auto outline outline-yellow-200 px-4 py-2 rounded-xl   text-yellow-200 font-semibold  dark:text-fuchsia-200  dark:outline-fuchsia-200 "
                  >
                    Booking
                  </button>
                ) : (
                  <Link
                    to={"/checking/" + typeDetail.type.id}
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
        {/* rating ulasan */}
        <div className="my-1 w w-full flex flex-col h-auto p-4 ">
          <div className="w-full h-24 p-4 flex justify-start">
            <h1 className="text-2xl text-gray-700 font-bold dark:text-white">
              Rating dan Ulasan
            </h1>
          </div>
          <div className=" w-full h-auto mx-auto">
            <Rateing rate={rate} />
          </div>
          <div className="w-full xl:w-1/2 h-auto   flex flex-col gap-3 justify-start p-4  mt-6 mb-2">
            <Comment />
          </div>
        </div>
      </div>

      {/* modal */}
      <dialog id="dateModal" className="modal  ">
        <div className="modal-box w-full ">
          <DatePicker setDate={setDate} date={date} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default InfoType;
