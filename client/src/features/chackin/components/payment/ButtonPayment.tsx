import React, { useEffect, useState } from "react";
import axios from "axios";
import { userProps } from "../../../../api/interface/index";
import * as fetch from "../../../../api/index";
import { bookingProps } from "../../../../api/interface/index";

interface childButtonPaymentProps {
  dataBooking: {
    typeId: number;
    roomName: string;
    imageCover: string;
    startDate: string;
    endDate: string;
    totalPrice: number;
  };
  user: userProps;
}

const ButtonPayment: React.FC<childButtonPaymentProps> = ({
  dataBooking,
  user,
}) => {
  const [request, setRequest] = useState({
    totalPrice: 0,
    email: "",
    contact: 0,
  });

  const [bookingData, setBookingData] = useState<bookingProps>({
    typeId: 0,
    clientId: 0,
    startDate: "",
    endDate: "",
    totalPrice: 0,
  });

  useEffect(() => {
    const scripts = document.createElement("script");
    scripts.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    scripts.setAttribute("data-client-key", "");
    scripts.async = true;
    document.head.appendChild(scripts);
    setRequest({
      totalPrice: dataBooking.totalPrice,
      email: user.email,
      contact: user.contact,
    });
    setBookingData({
      typeId: dataBooking.typeId,
      clientId: user.id,
      startDate: dataBooking.startDate,
      endDate: dataBooking.endDate,
      totalPrice: dataBooking.totalPrice,
    });
  }, [dataBooking, user]);

  const handlePayment = async () => {
    await axios
      .post("http://localhost:8080/api/payment", request)
      .then((response) => {
        const snapToken = response.data.snapToken;

        snap.pay(snapToken, {
          onSuccess: async function (result: unknown) {
            // Handle success
            console.log("Payment successful", result);
            await fetch.postBooking(bookingData);
          },
          onPending: function (result: unknown) {
            // Handle pending
            console.log("Payment pending", result);
          },
          onError: function (result: unknown) {
            // Handle error
            console.error("Payment error", result);
          },
        });
      })
      .catch((error) => {
        console.log("error fatching snap token", error);
      });
  };

  return (
    <div className=" h-[200px] mx-2 rounded-lg shadow-lg mt-4 bg-white">
      <div className="w-full h-full  flex justify-center items-center">
        <button
          onClick={() => handlePayment()}
          className="w-1/2  p-4 bg-emerald-400 rounded-lg font-bold text-white hover:bg-emerald-600 "
        >
          Lanjutkan Ke Pembayaran
        </button>
      </div>
    </div>
  );
};

export default ButtonPayment;
