import React from "react";
import { userProps } from "../../../api/interface/index";

interface childUserProps {
  user: userProps;
}

const DataUser: React.FC<childUserProps> = ({ user }) => {
  const handleOnChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="w-full h-80 bg-base-100 my-5 mx-2 text-gray-700 rounded-xl shadow-lg flex md:w-[500px] md:h-[200px]">
        <div className="w-full h-full flex flex-col">
          <div className="mx-auto my-4">
            <h1 className="text-2xl font-semibold">Masukan atas nama </h1>
          </div>
          <div className="m-auto">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 justify-center items-center">
                <label htmlFor="name">Atas nama : </label>
                <input
                  onChange={(e) => {
                    handleOnChage(e);
                  }}
                  defaultValue={user.name}
                  type="text"
                  name="name"
                  id="name"
                  className="input input-bordered"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataUser;
