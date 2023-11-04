import React, { useEffect, useState } from "react";
import { userProps } from "../../api/interface";
import { Link } from "react-router-dom";
import DarkMOdeToggle from "../DarkMOdeToggle";
import jwt from "jwt-decode";
import * as fetch from "../../api/index";
interface childUserProps {
  user: userProps;
}

const Navbar: React.FC<childUserProps> = ({ user }) => {
  const [length, setlength] = useState(0);
  const [bookingData, setBookingData] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    const getDataBooking = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const decodeToken: any = jwt(token);
        const clientId = decodeToken.uid;
        const get = await fetch.getDataBooking(clientId);

        setlength(get.bookingData.length);
        setBookingData(get.bookingData);
      }
    };
    getDataBooking();
  }, [user]);

  return (
    <>
      <div className="w-full bg-fuchsia-400 h-7 text-white gap-2 flex justify-center items-center">
        <h4 className="font-semibold ">we stand with Palestine 🍉 </h4>
        <a
          href="https://baznas.go.id/sedekahduniaislam?gclid=CjwKCAjw15eqBhBZEiwAbDomEnLq8laWzwNn1Ai4PvDizxgE4x4-95MslFW9eDh7IKhoK7chVteOLRoCp64QAvD_BwE"
          target="_blank"
          className=" underline text-sm hover:text-emerald-100"
        >
          click for help
        </a>
      </div>
      <div className="navbar bg-base-100  dark:bg-gradient-to-l dark:from-fuchsia-500 dark:bg-transparent">
        <div className="flex-1">
          <span className="m-4 normal-case font-bold text-2xl dark:text-white">
            YOO
          </span>
        </div>
        <div className="flex-none">
          {user.id === 0 ? (
            <>
              <div className="flex gap-5 justify-center items-center">
                <DarkMOdeToggle />
                <Link
                  to={"/auth"}
                  className="btn btn-secondary xl:text-xl font-bold dark:btn-neutral"
                >
                  Login
                </Link>
              </div>
            </>
          ) : (
            <>
              <DarkMOdeToggle />
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>

                    <span className="badge badge-sm bg-red-300 indicator-item">
                      {length}
                    </span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-7 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    {length === 0 ? (
                      <span className="font-bold text-lg">
                        {" "}
                        belum booking ya!
                      </span>
                    ) : (
                      <span className="font-bold text-lg">
                        {" "}
                        {length} booking kamar
                      </span>
                    )}

                    <ul>
                      {length === 0 ? (
                        <li className="bg-gradient-to-r mb-1  from-fuchsia-300/30 to-gray-100 p-2 font-semibold text-gray-700 rounded-lg">
                          <div className="flex gap-2">
                            <span>buruan booking sekarang</span>
                          </div>
                        </li>
                      ) : (
                        bookingData.map(
                          (data: { id: number; name: string }, i) => {
                            return (
                              <li
                                key={i}
                                className="bg-gradient-to-r mb-1  from-fuchsia-300/30 to-gray-100 p-2 font-semibold text-gray-700 rounded-lg"
                              >
                                <div className="flex gap-2">
                                  <span>{data.name}</span>
                                  <Link
                                    to={"/detail/" + data.id}
                                    className="bg-green-300 fixed right-2 text-white font-light cursor-pointer px-2 text-sm rounded-full hover:bg-green-500 "
                                  >
                                    Detail
                                  </Link>
                                </div>
                              </li>
                            );
                          }
                        )
                      )}
                      {}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="../img/dev/pp.png" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-7 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">{user.name}</a>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLogout()}
                      className="bg-fuchsia-400 text-white flex justify-center "
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
