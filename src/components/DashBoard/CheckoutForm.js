import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { _id, pPrice, buyerMail } = order;
  // console.log(pPrice)

  useEffect(() => {
    fetch("https://sazzad795.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // 'authorization':`Barer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ pPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [pPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    console.log(paymentMethod);

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: buyerMail,
          },
        },
      });

    if (intentError) {
      setCardError(intentError.message);
      setProcessing(false);
      // success('');
    } else {
      // console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setCardError("");
      setSuccess("Your Payment Is Success");

      const payment = {
        order: _id,
        transactionId: paymentIntent.id
      };

      fetch(`https://manufacturer-website-app.herokuapp.com/payment/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
       
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-2"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-error">{cardError}</p>}
      {success && (
        <div>
          <p className="text-green-400">{success}</p>
          <p className="text-green-400">trans id:{transactionId} </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
