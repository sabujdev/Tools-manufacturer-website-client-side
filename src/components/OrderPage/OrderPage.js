import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/Firebase.init";
import Loading from "../Loading/Loading";

const OrderPage = ({ partsInfo, setPartsInfo }) => {
  const [user, loading] = useAuthState(auth);
  const { _id, name, available, price } = partsInfo;
  const availableRef = useRef('');
  const quantityRef = useRef('');
  
  const availableField = Number(availableRef.current.value);
  const quantityField = Number(quantityRef.current.value);
  
  if (loading) {
    <Loading />;
  }
  const handleBooking = (e) => {
    e.preventDefault();
    const orderInput = Number(e.target.quantity.value);
    let available = Number(e.target.available.value);
      const remaining = (available - orderInput);
      // available = remaining;
      //for database
      const booking = {
        partId: _id,
        part: name,
        pPrice: price,
        buyerMail: user.email,
        orderPcs: e.target.quantity.value,
        availableQuantity: e.target.available.value,
        address: e.target.address.value,
        phone: e.target.phone.value,
        remaining: remaining,
      };
      console.log(booking);

      fetch("https://sazzad795.herokuapp.com/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Your Order Booked");
          setPartsInfo(null);
        });
    }
  

  const [quantity, setQuantity] = useState({
    orderQuantity : 10
  });

  const handleQuantity = e => {
    const newOrderQuantity = parseInt(e.target.value);
    setQuantity(newOrderQuantity);
    if (newOrderQuantity < 10 || newOrderQuantity > availableField) {
      console.log(newOrderQuantity);
      toast.error(`please our minimum quantity is 10 and maximum quantity is ${available}`)
    }
  }

  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="order-modal"
            className="btn btn-sm btn-error btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-center text-primary">{name}</h3>
          <h3 className="font-bold text-center text-primary">Price: {price}</h3>
          <form onSubmit={handleBooking}>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                ref={availableRef}
                type="text"
                name="available"
                value={available}
                disabled
                className="input input-bordered w-full max-w-xs "
              />
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                value={user.email}
                disabled
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                ref={quantityRef}
                onChange={handleQuantity}
                type="number"
                name="quantity"
                value={quantity.orderQuantity}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                name="address"
                required
                type="text"
                placeholder="Dhaka bangladesh"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                required
                name="phone"
                type="number"
                placeholder="01780435629"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              {quantityField < 10 || availableField < quantityField ? <input
                type="submit"
                disabled
                value="Please Order"
                className="input input-bordered w-full max-w-xs btn btn-primary mt-5"
              />: <input
              type="submit"
              value="Please Order"
              className="input input-bordered w-full max-w-xs btn btn-primary mt-5"
            />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
