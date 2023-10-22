import axios from "axios";
import { postDataRegister, loginUserProps } from "./interface/index";

export const fetchAllTypes = async () => {
  try {
    const get = await axios.get("http://localhost:8080/api/type");

    return get.data.types;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTypeById = async (id: number) => {
  try {
    const get = await axios.get(`http://localhost:8080/api/type/${id}`);

    return get.data.datas.types;
  } catch (error) {
    console.log(error);
  }
};

export const getRoomAvailable = async (idType: number) => {
  try {
    const get = await axios.get(
      `http://localhost:8080/api/available/room/${idType}`
    );

    return get.data.datas.room;
  } catch (error: unknown) {
    if (error instanceof Error && axios.isAxiosError(error) && error.response) {
      return error;
    }
  }
};

export const postDataRegisterUser = async (data: postDataRegister) => {
  try {
    const post = await axios.post(
      "http://localhost:8080/api/auth/register",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return post.data.messege;
  } catch (error) {
    console.log(error);
  }
};

export const postDataLoginUser = async (data: loginUserProps) => {
  try {
    const post = await axios.post(
      "http://localhost:8080/api/auth/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return post.data;
  } catch (error: unknown) {
    if (error instanceof Error && axios.isAxiosError(error) && error.response) {
      return error.response.data.messages.error;
    }
  }
};

export const getAllImageByType = async (id: number) => {
  try {
    const get = await axios.get(`http://localhost:8080/api/image/${id}`);
    return get.data.image;
  } catch (error) {
    console.log(error);
  }
};
