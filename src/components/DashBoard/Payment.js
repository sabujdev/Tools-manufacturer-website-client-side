import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3t0XIf0LSejbpYhtCPqMqWK30t2e3a2Hv3A2Sjl2fDGBSP0BXadEfRQRJBsSy2RH8dXf9ala5uyK4qR9YxAIlb00IsRPgRbg"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://sazzad795.herokuapp.com/payment/${id}`;
  const { data: order, isLoading } = useQuery(["payment", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  const name = order.buyerMail.split("@")[0];
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="font-bold text-primary">hello {name}</h3>
          <h2 className="card-title">Please Pay For {order.part}</h2>
          <p className="font-semibold">please payment ${order.pPrice}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
