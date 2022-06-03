import React from "react";

const ToolsCard = ({ part, setPartsInfo }) => {
  const { img, name, minimumQuantity, price, description, available } = part;

  return (
    <div className="card lg:card-side shadow-xl bg-base-100">
      <figure className="lg:w-[50%] ">
        <img className="h-50 w-50" src={img} alt="Album" />
      </figure>
      <div className="card-body lg:w-[50%] bg-cover">
        <h2 className="card-title">{name}</h2>
        <p> Price: {price}</p>
        <p> Min Order: {minimumQuantity}</p>
        <p> Available: {available}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <label
            onClick={() => setPartsInfo(part)}
            htmlFor="order-modal"
            className="btn btn-primary uppercase"
          >
            Order
          </label>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
