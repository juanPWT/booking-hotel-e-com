import axios from "axios";

export const fetchAllTypes = async () => {
  try {
    const get = await axios.get("http://localhost:8080/type");

    return get.data.types;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTypeById = async (id: number) => {
  try {
    const get = await axios.get(`http://localhost:8080/type/${id}`);

    return get.data.datas.types;
  } catch (error) {
    console.log(error);
  }
};
