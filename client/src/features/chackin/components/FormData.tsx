import React from "react";
import { userProps } from "../../../api/interface/index";
import DataUser from "./DataUser";

interface childDataProps {
  user: userProps;
}

const FormData: React.FC<childDataProps> = ({ user }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div>
          <DataUser user={user} />
        </div>
      </div>
    </>
  );
};

export default FormData;
