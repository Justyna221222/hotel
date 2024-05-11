import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./Form.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  name: yup.string().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  phone: yup.string().required(),
  zipcode: yup.string().required(),
  category: yup.string().required(),
  mail: yup.string().email().required(),
  website: yup.string().url().required(),
  logo: yup.mixed<File>().required(),
  photos: yup.mixed<File>().required(),
});

const MAX_COUNT = 5;

// interface IFormInput {
//   name: string;
//   street: string;
//   city: string;
//   state: string;
//   phone: string;
//   zipcode: string;
//   category: string;
//   mail: string;
//   website: string;
//   logo: File;
//   photos: File;
//   file: File;
// }

export const Form: React.FC = () => {
  //const { register, control, handleSubmit } = useForm<IFormInput>();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>();
  const [showPhotoList, setPhotoList] = useState(false);
  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  const handleUploadFiles = function (photoFiles: File[]) {
    console.log(photoFiles.length);
    if (photoFiles && photoFiles.length <= MAX_COUNT) {
      setUploadedFiles(photoFiles);
      setPhotoList(true);
    } else {
      alert("Możesz wprowadzić maksymalnie 5 zjęć");
      setUploadedFiles(undefined);
    }
  };
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let formattedFiles = Object.values(e.target.files!).map((file) => file);
    console.log("Formattedfiles", formattedFiles);
    handleUploadFiles(formattedFiles);
  };
  return (
    <div>
      <div>
        <h2>Insert hotel into database</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>
        <label>Address</label>
        <input {...register("street")} />
        <p>{errors.street?.message}</p>
        <div className="input-group">
          <div className="input-field">
            <label>City</label>
            <input {...register("city")} />
            <p>{errors.city?.message}</p>
          </div>
          <div className="input-field">
            <label>State</label>
            <input {...register("state")} />
            <p>{errors.state?.message}</p>
          </div>
          <div className="input-field">
            <label>ZIP Code</label>
            <input {...register("zipcode")} />
            <p>{errors.zipcode?.message}</p>
          </div>
        </div>
        <label>Phone</label>
        <input {...register("phone")} />
        <p>{errors.phone?.message}</p>
        <label>Category</label>
        <select {...register("category")}>
          <option value="4*">4*</option>
          <option value="5*">5*</option>
        </select>
        <p>{errors.category?.message}</p>
        <label>Email</label>
        <input {...register("mail")} />
        <p>{errors.mail?.message}</p>
        <label>Website</label>
        <input {...register("website")} />
        <p>{errors.website?.message}</p>
        <label>Logo</label>
        <input {...register("logo")} type="file" />
        <p>{errors.logo?.message}</p>
        <label htmlFor="fileUpload">Zdjęcia</label>
        <p>&#40; Możesz wybrać do 5 zdjęć. &#41;</p>
        <input
          {...register("photos")}
          type="file"
          id="fileUpload"
          multiple
          accept="application/pdf, image/png"
          onChange={onChange}
        />
        <p>{errors.photos?.message}</p>
        {showPhotoList && (
          <React.Fragment>
            <div className="uploaded-files-list">
              {uploadedFiles!.map((file) => (
                <div key={file.lastModified}>{file.name}</div>
              ))}
            </div>
          </React.Fragment>
        )}
        <input type="submit" />
      </form>
      <DevTool control={control} />
    </div>
  );
};
