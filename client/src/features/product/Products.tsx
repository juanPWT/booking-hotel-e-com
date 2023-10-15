import * as React from "react";
import * as fetch from "../../api";
import { typeProps } from "../../api/interface/index";
import { Link } from "react-router-dom";
import { rupiah } from "../../hook/formater-currency";

const Product = () => {
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
            <div className="card w-96 bg-base-100 shadow-xl" key={data.id}>
              <figure>
                <img
                  src={data.imageURL}
                  alt="room"
                  className="h-[270px] w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mb-2">
                  {data.name}
                  {data.name === "Superior Room" &&
                  "Deluxe Rooom" &&
                  "VIP Room" ? (
                    <div className=" bg-fuchsia-500 text-white font-semibold text-sm p-1 rounded-full">
                      <span className="mx-2">Premium</span>
                    </div>
                  ) : (
                    ""
                  )}
                </h2>
                <div className="card-actions justify-end">
                  {data.facility_name.split(",").map((data, i) => {
                    return (
                      <div className="badge badge-outline" key={i}>
                        {data}
                      </div>
                    );
                  })}
                </div>

                <div className="mx-5 flex font-semibold text-gray-700 text-2xl justify-end">
                  {rupiah(data.price)}
                </div>
                <div className="my-2 flex justify-end gap-3">
                  <button className="p-2 bg-yellow-400 rounded-xl text-white font-bold hover:bg-yellow-200 hover:text-gray-600">
                    Booking sekarang
                  </button>
                  <Link
                    to={"/product/" + data.id}
                    className="bg-green-500 p-2 rounded-xl font-semibold text-white hover:bg-green-300 hover:text-gray-600"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
