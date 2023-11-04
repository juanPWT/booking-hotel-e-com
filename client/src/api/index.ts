import axios from "axios";
import {
  postDataRegister,
  loginUserProps,
  bookingProps,
} from "./interface/index";

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
    const res = {
      status: 200,
      messege: post.data.messege,
    };
    return res;
  } catch (error: unknown) {
    if (error instanceof Error && axios.isAxiosError(error) && error.response) {
      const res = {
        status: error.response.data.status,
        messege: error.response.data.messages.error,
      };
      return res;
    }
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

export const getRateing = async (id: number) => {
  try {
    const get = await axios.get(`http://localhost:8080/api/rate/${id}`);
    return get.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCommentByTypeId = async (id: number) => {
  try {
    const get = await axios.get(`http://localhost:8080/api/comment/${id}`);

    return get.data;
  } catch (error) {
    console.log(error);
  }
};

export const postBooking = async (data: bookingProps) => {
  try {
    const post = await axios.post("http://localhost:8080/api/booking", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return post.data;
  } catch (error: unknown) {
    if (error instanceof Error && axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
  }
};

export const getDataBooking = async (clientId: number) => {
  try {
    const get = await axios.get(
      `http://localhost:8080/api/booking/${clientId}`
    );

    return get.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDetaillDataBooking = async (bookingId: number) => {
  try {
    const get = await axios.get(
      `http://localhost:8080/api/detail/booking/${bookingId}`
    );

    return get.data;
  } catch (error) {
    console.log(error);
  }
};
