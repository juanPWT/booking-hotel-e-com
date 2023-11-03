import * as React from "react";
import * as fetch from "../../api";
import { typeProps, userProps } from "../../api/interface/index";
import { Link } from "react-router-dom";
import { rupiah } from "../../hook/formater-currency";

interface childProductsProps {
  user: userProps;
}

const Product: React.FC<childProductsProps> = ({ user }) => {
  const [type, setType] = React.useState<typeProps[]>([]);

  React.useEffect(() => {
    const getData = async () => {
      const data = await fetch.fetchAllTypes();
      setType(data);
    };

    getData();
  }, []);

  return (
    <div className="container flex justify-center items-center  p-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {type.map((data) => {
          return (
            <Link
              to={"/product/" + data.id}
              className="card w-96 bg-base-100 shadow-xl hover:shadow-emerald-200 dark:hover:shadow-fuchsia-400 dark:bg-transparent/20"
              key={data.id}
            >
              <figure>
                <img
                  src={data.imageURL}
                  alt="room"
                  className="h-[270px] w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mb-2 dark:text-white">
                  {data.name}
                  {data.name === "Superior Room" &&
                  "Deluxe Rooom" &&
                  "VIP Room" ? (
                    <div className=" bg-yellow-400 dark:bg-fuchsia-400 text-white font-semibold text-sm p-1 rounded-full">
                      <span className="mx-2">Premium</span>
                    </div>
                  ) : (
                    ""
                  )}
                </h2>
                <div className="card-actions justify-end">
                  {data.facility_name.split(",").map((data, i) => {
                    return (
                      <div
                        className="badge badge-outline dark:text-white dark:badge-outline"
                        key={i}
                      >
                        {data}
                      </div>
                    );
                  })}
                </div>

                <div className="mx-5 flex font-semibold text-gray-700 text-2xl justify-end dark:text-white">
                  {rupiah(data.price)}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
