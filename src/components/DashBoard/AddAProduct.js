import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/Firebase.init";

const AddAProduct = () => {
  const [user] = useAuthState(auth);

  const addPart = (e) => {
    e.preventDefault();
    const part = {
      email: user?.email,
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      minimumQuantity: e.target.minimumQuantity.value,
      available: e.target.availableQuantity.value,
      img: e.target.img.value,
    };
    console.log(part);

    fetch("https://manufacturer-website-app.herokuapp.com/products", {
      method: "POST",
      body: JSON.stringify(part),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.acknowledged) {
          toast("Item Added Successful!");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <h2 className="">ADD A PRODUCT</h2>
      <div>
        <form onSubmit={addPart} className="md:w-2/4 mx-auto p-2 mb-10">
          <div className="form-group mb-6">
            <input
              type="text"
              name="name"
              className="form-control block
           w-full
           px-3
           py-1.5
           text-base
           font-normal
           text-gray-700
           bg-white bg-clip-padding
           border border-solid border-gray-300
           rounded
           transition
           ease-in-out
           m-0
           focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none"
              placeholder="Item Name"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                type="text"
                name="price"
                className="form-control
             block
             w-full
             px-3
             py-1.5
             text-base
             font-normal
             text-gray-700
             bg-white bg-clip-padding
             border border-solid border-gray-300
             rounded
             transition
             ease-in-out
             m-0
             focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none"
                id="exampleInput123"
                placeholder="Price"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                name="availableQuantity"
                className="form-control
             block
             w-full
             px-3
             py-1.5
             text-base
             font-normal
             text-gray-700
             bg-white bg-clip-padding
             border border-solid border-gray-300
             rounded
             transition
             ease-in-out
             m-0
             focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none"
                id="exampleInput124"
                placeholder="available quantity"
                required
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              name="minimumQuantity"
              className="form-control
             block
             w-full
             px-3
             py-1.5
             text-base
             font-normal
             text-gray-700
             bg-white bg-clip-padding
             border border-solid border-gray-300
             rounded
             transition
             ease-in-out
             m-0
             focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none"
              id="exampleInput123"
              placeholder="minimum quantity"
              value={10}
              disabled
            />
          </div>

          <div className="form-group mb-6">
            <input
              type="email"
              name="email"
              className="form-control block 
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none readOnly"
              id="exampleInput125"
              placeholder="your email"
              value={user?.email}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              name="img"
              className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none"
              id="exampleInput126"
              placeholder="Image Url"
              required
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              name="description"
              className="w-full h-24"
              placeholder="Description"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="
        w-full
        px-6
        py-2.5
        bg-primary
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-primary hover:shadow-lg
        focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-primary active:shadow-lg
        transition
        duration-150
        ease-in-out"
          >
            Add Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
