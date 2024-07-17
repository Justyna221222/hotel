import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

interface IFormInput {
  name: string;
  street: string;
  city: string;
  state: string;
  phone: string;
  zipcode: string;
  category: string;
  mail: string;
  website: string;
  logo: File;
}

export const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <h2>Insert hotel into database</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name")} />

        <label>Address</label>
        <input {...register("street")} />

        <div className="input-group">
          <div className="input-field">
            <label>City</label>
            <input {...register("city")} />
          </div>
          <div className="input-field">
            <label>State</label>
            <input {...register("state")} />
          </div>
          <div className="input-field">
            <label>ZIP Code</label>
            <input {...register("zipcode")} />
          </div>
        </div>
        <label>Phone</label>
        <input {...register("phone")} />
        <label>Category</label>
        <select {...register("category")}>
          <option value="4*">4*</option>
          <option value="5*">5*</option>
        </select>
        <label>Email</label>
        <input {...register("mail")} />
        <label>Website</label>
        <input {...register("website")} />
        <label>Logo</label>
        <input {...register("logo")} type="file" />

        <input type="submit" />
      </form>
    </div>
  );
};
