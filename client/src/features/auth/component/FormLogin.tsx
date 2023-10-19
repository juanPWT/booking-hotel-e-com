import React from "react";
import { FormikHelpers, useFormik } from "formik";
import { loginSchema } from "../../../schemas/index";
import { loginUserProps } from "../../../api/interface/index";
import { postDataLoginUser } from "../../../api/index";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface childLoginProps {
  setForm: React.Dispatch<React.SetStateAction<string>>;
}

const FormLogin: React.FC<childLoginProps> = ({ setForm }) => {
  const navigate = useNavigate();

  const onSubmit = (
    values: loginUserProps,
    action: FormikHelpers<loginUserProps>
  ) => {
    const postProccess = async () => {
      const post = await postDataLoginUser(values);
      if (post === "Invalid password") {
        toast.error("Password salah");
      } else if (post === "email not found") {
        toast.error("Email tidak terdaftar");
        setForm("register");
      } else {
        toast.success("Login berhasil");
        setTimeout(() => {
          navigate("/");
        }, 1000);
        localStorage.setItem("token", post.jwt_token);
      }
    };

    postProccess();
    action.resetForm();
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
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email" className="flex flex-col gap-2 mb-3">
        <span className="text-gray-500 font-semibold dark:text-white">
          Email:{" "}
        </span>
        <input
          type="email"
          id="email"
          placeholder="Masukan email...."
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
      <label htmlFor="password" className="flex flex-col gap-2 mb-3">
        <span className="text-gray-500 font-semibold dark:text-white">
          Password:{" "}
        </span>
        <input
          type="password"
          id="password"
          placeholder="Masukan password...."
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
      <div className="my-5 flex gap-10">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-emerald-400 p-3 rounded-xl shadow-md  hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-200"
        >
          <span className="text-white font-semibold">Sign in</span>
        </button>
        <button
          type="button"
          onClick={() => setForm("register")}
          className="m-auto hover:underline text-gray-700"
        >
          belum punya akun ?
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
