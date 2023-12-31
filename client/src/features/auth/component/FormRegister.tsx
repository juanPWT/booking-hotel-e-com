import React from "react";
import { FormikHelpers, useFormik } from "formik";
import { resgisterSchema } from "../../../schemas/index";
import {
  registerUserProps,
  postDataRegister,
} from "../../../api/interface/index";
import { toast } from "react-hot-toast";
import { postDataRegisterUser } from "../../../api/index";

interface childRegisterProps {
  setForm: React.Dispatch<React.SetStateAction<string>>;
}

const FormRegister: React.FC<childRegisterProps> = ({ setForm }) => {
  const onSubmit = (
    values: registerUserProps,
    actions: FormikHelpers<registerUserProps>
  ) => {
    const postProccess = async () => {
      const postData: postDataRegister = {
        email: values.email,
        name: values.name,
        contact: values.contact,
        password: values.password,
      };
      const request = await postDataRegisterUser(postData);
      if (request?.status === 400) {
        toast.error(request.messege);
      } else {
        toast.success(request?.messege);
        setForm("login");
      }
    };
    actions.resetForm();
    postProccess();
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      contact: 62,
      password: "",
      passwordConf: "",
    },
    validationSchema: resgisterSchema,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email" className="flex flex-col gap-2 mb-3">
        <span className="text-gray-500 font-semibold dark:text-white">
          Email:{" "}
        </span>
        <input
          type="text"
          id="email"
          placeholder="Masukan email...."
          name="email"
          className={`px-3 py-2 rounded-lg w-[400px]   text-gray-700 ${
            errors.email ? "focus:outline-red-300" : "focus:outline-emerald-300"
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors ? (
          <p className="text-[12px] text-red-500 dark:text-red-300 font-normal ">
            {errors.email}
          </p>
        ) : (
          ""
        )}
      </label>
      <div className="flex gap-1">
        <label htmlFor="name" className="flex flex-col gap-2 mb-3">
          <span className="text-gray-500 font-semibold dark:text-white">
            Name:{" "}
          </span>
          <input
            type="text"
            id="name"
            placeholder="Masukan nama anda...."
            name="name"
            className={`px-3 py-2 rounded-lg w-[200px]  text-gray-700 ${
              errors.name
                ? "focus:outline-red-300 "
                : "focus:outline-emerald-300 "
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors ? (
            <p className="text-[12px] text-red-500 dark:text-red-300 font-normal ">
              {errors.name}
            </p>
          ) : (
            ""
          )}
        </label>

        <label htmlFor="contact" className="flex flex-col gap-2 mb-3">
          <span className="text-gray-500 font-semibold dark:text-white">
            No Hp:{" "}
          </span>
          <input
            type="text"
            id="contact"
            placeholder="Masukan no.HP yang bisa dihubungi.."
            name="contact"
            className={`px-3 py-2 rounded-lg w-[200px]   text-gray-700 ${
              errors.contact
                ? "focus:outline-red-300"
                : "focus:outline-emerald-300"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.contact}
          />
          {errors ? (
            <p className="text-[12px] text-red-500 dark:text-red-300 font-normal ">
              {errors.contact}
            </p>
          ) : (
            ""
          )}
        </label>
      </div>
      <label htmlFor="password" className="flex flex-col gap-2 mb-3">
        <span className="text-gray-500 font-semibold dark:text-white">
          Password:{" "}
        </span>
        <input
          type="password"
          id="password"
          placeholder="Masukan password...."
          name="password"
          className={`px-3 py-2 rounded-lg w-[400px]   text-gray-700 ${
            errors.password
              ? "focus:outline-red-300"
              : "focus:outline-emerald-300"
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors ? (
          <p className="text-[12px] text-red-500 dark:text-red-300 font-normal ">
            {errors.password}
          </p>
        ) : (
          ""
        )}
      </label>
      <label htmlFor="passwordConf" className="flex flex-col gap-2 mb-3">
        <span className="text-gray-500 font-semibold dark:text-white">
          konfirmasi Password:{" "}
        </span>
        <input
          type="password"
          id="passwordConf"
          placeholder="Masukan password lagi...."
          name="passwordConf"
          className={`px-3 py-2 rounded-lg w-[400px] focus:outline-emerald-300  text-gray-700 ${
            errors.passwordConf
              ? "focus:outline-red-300"
              : "focus:outline-emerald-300"
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConf}
        />
        {errors ? (
          <p className="text-[12px] text-red-500 dark:text-red-300 font-normal ">
            {errors.passwordConf}
          </p>
        ) : (
          ""
        )}
      </label>
      <div className="my-5 flex gap-10">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-emerald-400 p-3 rounded-xl shadow-md  hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-200"
        >
          <span className="text-white font-semibold">Sign up</span>
        </button>
        <button
          onClick={() => setForm("login")}
          type="button"
          className="m-auto hover:underline text-sky-700 dark:text-sky-300"
        >
          Sudah punya akun ?
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
