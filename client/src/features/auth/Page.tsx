import React, { useState } from "react";
import LabelTitle from "../../components/LabelTitle";
import FormLogin from "./component/FormLogin";
import FormRegister from "./component/FormRegister";

const Auth = () => {
  const [form, setForm] = useState("login");

  return (
    <>
      <div className="min-h-screen flex flex-col gap-2 xl:flex-row justify-between p-5 ">
        <div className="w-full min-h-screen  flex  ">
          <div
            className={`w-full ${
              form === "login" ? "h-[500px]" : "h-[700px]"
            }  my-auto bg-gradient-to-t from-fuchsia-400 rounded-xl flex flex-col`}
          >
            <LabelTitle />
            <div className="my-4 h-20 flex items-center justify-center">
              <button
                onClick={() => setForm("login")}
                className={`${
                  form === "login" ? "bg-fuchsia-400 text-white" : "bg-gray-50"
                } flex w-40 h-1/2  rounded-l-lg`}
              >
                <h5 className="m-auto font-semibold">Login</h5>
              </button>
              <button
                onClick={() => setForm("register")}
                className={`${
                  form === "register"
                    ? "bg-fuchsia-400 text-white"
                    : "bg-gray-50"
                } w-40 h-1/2   rounded-r-lg flex`}
              >
                <h5 className="m-auto font-semibold">Regiter</h5>
              </button>
            </div>
            <div className="mx-auto my-1">
              {form === "login" ? (
                <FormLogin setForm={setForm} />
              ) : (
                <FormRegister setForm={setForm} />
              )}
            </div>
          </div>
        </div>
        <div className="hidden w-full min-h-screen  xl:flex">
          <img
            src="../img/dev/carousel.jpg"
            alt="image auth"
            className={`rounded-lg ${
              form === "login" ? "h-[500px]" : "h-[700px]"
            }  my-auto mx-auto`}
          />
        </div>
      </div>
    </>
  );
};

export default Auth;
