import React, { useState as hook } from "react";

const addproducts = () => {
  const [selectedImg, setSelectedImg] = hook("");
  const [uploadedImg, setUploadedImg] = hook("");

  const imageUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedImg);
    formData.append("upload_preset", "my_store");
    formData.append("cloud_name", "dof9j1yy7");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dof9j1yy7/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const response = await res.json();
    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await imageUpload();
    setUploadedImg(data.url);
    console.log(data.url);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="file"
          name="product"
          onChange={(e) => setSelectedImg(e.target.files[0])}
        />
        <input type="submit" value="Upload" />
      </form>
      {uploadedImg === "" ? null : <img src={uploadedImg} alt="uploaded" />}
    </div>
  );
};

export default addproducts;
