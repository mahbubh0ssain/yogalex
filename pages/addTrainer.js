import axios from "axios";
import React from "react";

const addTrainer = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
      formData
    );
    const imgUrl = await res.data.data.url;
    const trainerInfo = { name: e.target.name.value, imgUrl };

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/trainer`,
      trainerInfo
    );
    const data = await response.data;
    console.log(data);
    if (data.acknowledged) {
      alert("TRainer added successfully");
    }
    console.log(data);
  };

  return (
    <div className="max-w-[768px] mx-auto min-h-[69.3vh] grid grid-cols-1 items-center justify-center">
      <div className="shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-5xl font-thin text-center text-black">
            Add Trainer
          </h1>
          <div className="form-control">
            <label className="label  pb-0">
              <span className="label-text">Image</span>
            </label>
            <input
              required
              type="file"
              name="image"
              accept="image/*"
              placeholder="example@gmail.com"
              className="file-input file-input-bordered file-input-md w-full"
            />
          </div>
          <div className="form-control">
            <label className="label  pb-0">
              <span className="label-text">Name</span>
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="John Doe"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary"
              value="Submit"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addTrainer;