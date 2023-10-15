import React from "react";
import { FormikHelpers, useFormik } from "formik";
import { resgisterSchema } from "../../../schemas/index";
import { registerUserProps } from "../../../api/interface/index";

interface childRegisterProps {
  setForm: React.Dispatch<React.SetStateAction<string>>;
}

const FormRegister: React.FC<childRegisterProps> = ({ setForm }) => {
  const onSubmit = (
    values: registerUserProps,
    actions: FormikHelpers<registerUserProps>
  ) => {
    console.log(values);

    actions.resetForm();
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
        <span className="text-gray-500 font-semibold">Email: </span>
        <input
          type="text"
          id="email"
          placeholder="Masukan email...."
          name="email"
          className={`px-3 py-2 rounded-lg w-[400px]  focus:outline-4 text-gray-700 ${
            errors.email ? "focus:outline-red-300" : "focus:outline-emerald-300"
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors ? (
          <p className="text-[12px] text-white font-normal ">{errors.email}</p>
        ) : (
          ""
        )}
      </label>
      <div className="flex gap-1">
        <label htmlFor="name" className="flex flex-col gap-2 mb-3">
          <span className="text-gray-500 font-semibold">Name: </span>
          <input
            type="text"
            id="name"
            placeholder="Masukan nama anda...."
            name="name"
            className={`px-3 py-2 rounded-lg w-[200px] focus:outline-4 text-gray-700 ${
              errors.name
                ? "focus:outline-red-300 "
                : "focus:outline-emerald-300 "
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors ? (
            <p className="text-[12px] text-white font-normal ">{errors.name}</p>
          ) : (
            ""
          )}
        </label>

        <label htmlFor="contact" className="flex flex-col gap-2 mb-3">
          <span className="text-gray-500 font-semibold">No Hp: </span>
          <input
            type="text"
            id="contact"
            placeholder="Masukan no.HP yang bisa dihubungi.."
            name="contact"
            className={`px-3 py-2 rounded-lg w-[200px]  focus:outline-4 text-gray-700 ${
              errors.contact
                ? "focus:outline-red-300"
                : "focus:outline-emerald-300"
            }`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.contact}
          />
          {errors ? (
            <p className="text-[12px] text-white font-normal ">
              {errors.contact}
            </p>
          ) : (
            ""
          )}
        </label>
      </div>
      <label htmlFor="password" className="flex flex-col gap-2 mb-3">
        <span className="text-gray-500 font-semibold">Password: </span>
        <input
          type="password"
          id="password"
          placeholder="Masukan password...."
          name="password"
          className={`px-3 py-2 rounded-lg w-[400px]  focus:outline-4 text-gray-700 ${
            errors.password
              ? "focus:outline-red-300"
              : "focus:outline-emerald-300"
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors ? (
          <p className="text-[12px] text-white font-normal ">
            {errors.password}
          </p>
        ) : (
          ""
        )}
      </label>
      <label htmlFor="passwordConf" className="flex flex-col gap-2 mb-3">
        <span className="text-gray-500 font-semibold">
          konfirmasi Password:{" "}
        </span>
        <input
          type="password"
          id="passwordConf"
          placeholder="Masukan password lagi...."
          name="passwordConf"
          className={`px-3 py-2 rounded-lg w-[400px] focus:outline-emerald-300 focus:outline-4 text-gray-700 ${
            errors.passwordConf
              ? "focus:outline-red-300"
              : "focus:outline-emerald-300"
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConf}
        />
        {errors ? (
          <p className="text-[12px] text-white font-normal ">
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
          type="button"
          onClick={() => setForm("login")}
          className="m-auto hover:underline text-gray-700"
        >
          belum punya akun ?
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
