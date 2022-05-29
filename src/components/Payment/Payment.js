import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51K0J00AzASBloT9io5cYKaOP4SMi14yob1txLKVFXmRVuXSoYvnVVjYBTlwvALpuzaWUEKqTQUykioCxGF05WbHj00cZfx4Dmp')
const Payment = () => {
    const { id } = useParams()
    const [payment, setpayment] = useState({})
    console.log(payment)

    useEffect(() => {
        fetch(`https://manufacturer-website-app.herokuapp.com/payment/${id}`)
            .then(res => res.json())
            .then(data => setpayment(data))
    }, [])
    return (
        <div>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-2 gap0">
                    <div className="payment-box">
                        <h2 className='text-4xl font-semibold my-5 capitalize'>Confirm your payment</h2>
                        <p>Product Id: {id}</p>
                        <p>Product is <span className='font-semibold'>{payment.name}</span></p>
                        <h3 className='font-semibold text-2xl mb-5'>Price ${payment.price}</h3>
                        {payment?.price && <Elements stripe={stripePromise}>
                            <CheckOutForm payment={payment} />
                        </Elements>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;