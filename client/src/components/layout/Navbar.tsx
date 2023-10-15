import React from "react";
import { userProps } from "../../api/interface";
import { Link } from "react-router-dom";

interface childUserProps {
  user: userProps;
}

const Navbar: React.FC<childUserProps> = ({ user }) => {
  return (
    <>
      <div className="navbar bg-base-100  ">
        <div className="flex-1">
          <span className="m-4 normal-case font-bold text-2xl">YOO</span>
        </div>
        <div className="flex-none">
          {user ? (
            <>
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
                      1
                    </span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-7 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg"> 2 Room</span>
                    <ul>
                      <li className="bg-gradient-to-r mb-1  from-fuchsia-300/30 to-gray-100 p-2 font-semibold text-gray-700 rounded-lg">
                        <div className="flex gap-2">
                          <span>Superior Room</span>
                          <a className="bg-green-300 fixed right-2 text-white font-light cursor-pointer px-2 text-sm rounded-full hover:bg-green-500 ">
                            Detail
                          </a>
                        </div>
                      </li>
                      <li className="bg-gradient-to-r mb-1  from-fuchsia-300/30 to-gray-100 p-2 font-semibold text-gray-700 rounded-lg">
                        <div className="flex gap-2">
                          <span>Connection Room</span>
                          <a className="bg-green-300 fixed right-2 text-white font-light cursor-pointer px-2 text-sm rounded-full hover:bg-green-500 ">
                            Detail
                          </a>
                        </div>
                      </li>
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
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link
                  to={"/auth"}
                  className="btn btn-secondary xl:text-xl font-bold"
                >
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
