import { yupToFormErrors } from "formik";
import * as Yup from "yup";

export interface LoginForm {
  name?: string;
  email: string;
  password: string;
  passwordMatch?: string;
}

export const formScheme: LoginForm = {
  email: "",
  name: "",
  password: "",
  passwordMatch: "",
};

export const validationScheme = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required("Email is required")
    .email("Invalid Email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must have at least 8 characters"),
  passwordMatch: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});
