import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const HomeTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://manufacturer-website-app.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setTools(data));
  },[]);
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/tools')
  }
  return (
    <div className="md:p-10 bg-slate-100">
      <h2 className="text-xl md:text-4xl py-4 font-semibold text-primary text-center">
        Our All Tools
      </h2>
      {tools ? (
        <>
          <div className="grid md:grid-cols-2 lg:gap-6 grid-cols-1 ">
            {tools.slice(0, 6).map((item) => (
              <div
                key={item._id}
                className="card lg:card-side bg-base-100 shadow-xl flex my-5"
              >
                <figure className="flex-1">
                  <img className="h-full" src={item.img} alt="Album" />
                </figure>
                <div className="card-body flex-1">
                  <h2 className="card-title">{item.name}</h2>
                  <p>Price: {item.price}</p>
                  <p>available: {item.available}</p>
                  <p>Min Order: {item.minimumQuantity}</p>
                  <p>{item.description}</p>
                  <div className="card-actions justify-end">
                    <button onClick={handleOrder} className="btn btn-primary">Go For Order</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default HomeTools;


