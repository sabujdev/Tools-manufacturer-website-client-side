import React from "react";
import './Supplyers.css';

const Supplyers = () => {
  return (
    <div className=" suppliers-div card lg:card shadow-xl my-10 lg:mx-10">
      <h1 className="text-4xl font-bold text-sky-400 mb-5 mt-10 text-center">
        OUR SUPPLIERS
      </h1>
      <h5
        className="text-xl text-blue-900 font-semibold text-center
                  "
      >
        JUST 3 SUPPLIERS FROM OUR ALL SUPPLIERS
      </h5>

      <div className="flex flex-col justify-center lg:flex-row lg:justify-around my-10">
        <div className="suppliers-card mt-7">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqPeRNsMXeKIW6pfbwph-hnPFisrqb5sRrR0HKYOMfLwc0sDI8w4Txi2LKZTQpwBkrB8&usqp=CAU"
            alt=""
          />
          <h2 className="text-xl font-medium text-center">J.smith</h2>
        </div>
        <div className="suppliers-card mt-7">
          <img
            src="https://www.kindpng.com/picc/m/365-3653285_african-american-delivery-man-png-download-aviation-ground.png"
            alt=""
          />
          <h2 className="text-xl font-medium text-center">S.khan</h2>
        </div>
        <div className="suppliers-card mt-7">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKwdP8XnV6-JfJbyjHlbtYGYnZ65Fmxk8Y_j8eOAYsw96hJwgmdIuckaMdIExckWPyeU&usqp=CAU"
            alt=""
          />
          <h2 className="text-xl font-medium text-center">J.doe</h2>
        </div>
      </div>
    </div>
  );
};

export default Supplyers;
