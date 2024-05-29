//import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const SignupSchema = yup.object().shape({
    name: yup.string().required("To pole jest obowiązkowe"),
    street: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    phone: yup.string().required(),
    zipcode: yup.string().required(),
    category: yup.string().required(),
    mail: yup.string().email("Email musi zawierać @").required(),
    website: yup.string().url().required(),
    logo: yup.mixed<File>().required(),
    photos: yup.mixed<File>().required(),
  });

  export type InferredFormData = yup.InferType<typeof SignupSchema>;