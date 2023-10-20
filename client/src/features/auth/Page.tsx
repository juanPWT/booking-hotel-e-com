import React, { useState } from "react";
import FormLogin from "./component/FormLogin";
import FormRegister from "./component/FormRegister";
import { Toaster } from "react-hot-toast";
import LabelTitle from "../../components/LabelTitle";

const Auth = () => {
  const [form, setForm] = useState("login");

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="min-h-screen flex flex-col gap-10 xl:flex-row justify-center items-center p-5 ">
        <div className="mx-auto my-2 xl:hidden">
          <LabelTitle size="text-6xl" />
        </div>
        <div className="w-full min-h-screen  flex  ">
          <div
            className={`w-full  p-2  xl:ml-10 ${
              form === "login" ? "h-[500px]" : "h-[700px]"
            }  my-1 xl:my-auto  rounded-xl flex flex-col shadow-2xl bg-transparent/10`}
          >
            {form === "login" ? (
              <h1 className="text-2xl font-bold mx-auto mt-4 dark:text-white">
                Login sekarang
              </h1>
            ) : (
              <h1 className="text-2xl font-bold mx-auto mt-4 dark:text-white">
                Daftar sekarang
              </h1>
            )}
            <div className="my-1 h-20 flex items-center justify-center">
              <button
                onClick={() => setForm("login")}
                className={`${
                  form === "login"
                    ? "bg-fuchsia-400 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                } flex w-40 h-1/2  rounded-l-lg`}
              >
                <h5 className="m-auto font-semibold">Login</h5>
              </button>
              <button
                onClick={() => setForm("register")}
                className={`${
                  form === "register"
                    ? "bg-fuchsia-400 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
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
        <div className="w-full hidden xl:flex justify-center items-center ">
          <LabelTitle size="text-9xl" />
        </div>
      </div>
    </>
  );
};

export default Auth;
