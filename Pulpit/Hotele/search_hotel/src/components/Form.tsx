import React from "react";
import {useState} from 'react';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./Form.css";

const MAX_COUNT = 5;

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
  photos: File;
  file: File;
}

export const Form: React.FC = () => {
  const { register, control, handleSubmit } = useForm<IFormInput>();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>();
  const [showPhotoList, setPhotoList] = useState(false);
  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  const handleUploadFiles = function(photoFiles:any[]) {
    let uploaded:File[] = [];
    photoFiles.some((photograph:File) => {
      uploaded!.push(photograph);
        if (uploaded != null && uploaded.length <= MAX_COUNT) {
          setUploadedFiles(uploaded);
          setPhotoList(true);
        } else {
          alert("Możesz wprowadzić maksymalnie 5 zjęć");
          setUploadedFiles([]);
        }
    })
  }
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
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
        <label htmlFor='fileUpload'>
          Zdjęcia
        </label>
        <p>&#40; Możesz wybrać do 5 zdjęć. &#41;</p>
        <input {...register("photos")} type="file" id='fileUpload' multiple
        accept='application/pdf, image/png' onChange={onChange}/>
                {showPhotoList && (
      <React.Fragment>
      <div className="uploaded-files-list">
          {uploadedFiles!.map(file => (
            <div key={file.lastModified}>
                {file.name}
            </div>
        ))}
      </div>
      </React.Fragment>)}
        <input type="submit" />
      </form>
      <DevTool control={control} />
    </div>
  );
};
