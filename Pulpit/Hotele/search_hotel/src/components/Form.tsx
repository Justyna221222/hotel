import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./Form.css";
import { yupResolver } from "@hookform/resolvers/yup";
import {MAX_COUNT} from "./Form.constants";
import {FIVE_PHOTOS_ALLOWED} from "./Form.constants";
import "yup-phone";
import { InferredFormData, SignupSchema } from "./validation/signInForm";
import axios from "axios";
import { useMutation, useQuery } from '@tanstack/react-query'

export const Form: React.FC = () => {
//export const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const mutation = useMutation({
    mutationFn: (data:any) => {
      return axios.post("../upload.php", data)
  },});
   const onSubmit = async (data:InferredFormData) => {
    // const { isPending, error, isError } = useQuery({ queryKey: ['hotelForm'], queryFn: () =>
    // axios
    // .post("../upload.php", data, {})})
    // if (isPending) return 'Loading...'

    // if (isError) {
    //   setErrorMessage(`An error has occurred: ${error.message}`);
    // }

  //  };
  // const onError = () => {
  //   console.log("Wrong");
  // }
 };
const onError = () => {
  console.log("Wrong");

  const handleUploadFiles = (photoFiles: File[]) => {
    console.log(photoFiles.length);
    if (photoFiles && photoFiles.length <= MAX_COUNT) {
      setUploadedFiles(photoFiles);
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
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label>Name</label>
        <input {...register("name")} />
        <p>{errors.name?.message ?? ''}</p>
        <label>Address</label>
        <input {...register("street")} />
        <p>{errors.street?.message ?? ''}</p>
        <div className="input-group">
          <div className="input-field">
            <label>City</label>
            <input {...register("city")} />
            <p>{errors.city?.message ?? ''}</p>
          </div>
          <div className="input-field">
            <label>State</label>
            <input {...register("state")} />
            <p>{errors.state?.message ?? ''}</p>
          </div>
          <div className="input-field">
            <label>ZIP Code</label>
            <input {...register("zipcode")} />
            <p>{errors.zipcode?.message ?? ''}</p>
          </div>
        </div>
        <label>Phone</label>
        <input {...register("phone")} />
        <p>{errors.phone?.message ?? ''}</p>
        <label>Category</label>
        <select {...register("category")}>
          <option value="4*">4*</option>
          <option value="5*">5*</option>
        </select>
        <p>{errors.category?.message ?? ''}</p>
        <label>Email</label>
        <input {...register("mail")} />
        <p>{errors.mail?.message ?? ''}</p>
        <label>Website</label>
        <input {...register("website")} />
        <p>{errors.website?.message ?? ''}</p>
        <label>Logo</label>
        <input {...register("logo")} type="file" />
        <p>{errors.logo?.message ?? ''}</p>
        <label htmlFor="fileUpload">Zdjęcia</label>
        <p>{FIVE_PHOTOS_ALLOWED}</p>
        <input
          {...register("photos")}
          type="file"
          id="fileUpload"
          multiple
          accept="application/pdf, image/png"
          onChange={onChange}
        />
        <p>{errors.photos?.message ?? ''}</p>
          {uploadedFiles && (
          <>
            <div className="uploaded-files-list">
              {uploadedFiles!.map((file) => (
                <div key={file.lastModified}>{file.name}</div>
              ))}
            </div>
          </>
        )}
        <input type="submit" />
        <div>
          {mutation.isPending ? (
            'Adding hotel...'
          ) : (
            <>
              {mutation.isError ? (
                <div>An error occurred: {mutation.error.message}</div>
              ) : null}

              {mutation.isSuccess ? <div>Hotel added!</div> : null}

              <button
                onClick={() => {
                  mutation.mutate({ id: new Date(), title: 'Nowy Hotel' })
                }}
              >
                Zapisz hotel
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}};
