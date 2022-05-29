import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const CheckOutForm = ({ payment }) => {
    const { price, _id } = payment;
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [user]= useAuthState(auth);
    const history = useNavigate()

    useEffect(() => {
        fetch('https://manufacturer-website-app.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message)
            setSuccess('')
        } else {
            setError('')
            console.log(paymentMethod)
        }
        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        } else {
            setError('')
            setSuccess('Your payment processed succesfully')
            setProcessing(false)
            // save to database
            const paymentInfo = {
                paymentStatus: 'Successfull',
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transactionId: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `https://manufacturer-website-app.herokuapp.com/payment/${_id}`
            fetch(url, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        history('/orderSuccess')
                    } else {
                        window.reload()
                    }
                })
        }


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ? <p>Processing..</p> : <button className='bg-red-400 text-white px-10 mt-5 py-1 rounded-lg' type="submit" disabled={!stripe || success}>
                    Pay
                </button>}
            </form>
            {error && <p className='text-red-500 mt-2'>{error}</p>}
            {success && <p className='text-green-500 mt-2'>{success}</p>}
        </div>
    );
};

export default CheckOutForm;