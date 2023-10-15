import * as yup from "yup";

const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const resgisterSchema = yup.object().shape({
  email: yup.string().email("masukan email yang valid").required(),
  name: yup
    .string()
    .min(5, "nama minimal 5 charcter")
    .max(20, "nama maximal 20 character")
    .required(),
  contact: yup
    .string()
    .matches(phoneRegExp, "no hp tidak valid")
    .max(13, "maimal no hp 13 character")
    .required(),
  password: yup
    .string()
    .min(8, "password minimal 8 character")
    .matches(regex, { message: "password paling tidak 1 huruf dan 1 angka" })
    .required(),
  passwordConf: yup
    .string()
    .oneOf([yup.ref("password")], "konfirm password tidak match")
    .required(),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("masukan email yang valid").required(),
  password: yup.string().min(8, "password minimal 8 character").required(),
});
