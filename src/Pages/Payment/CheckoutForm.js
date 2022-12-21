import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({ BookingProduct }) => {
    const { productPrice, email, buyerName } = BookingProduct;
    console.log(typeof (productPrice))
    const stripe = useStripe();
    const elements = useElements()

    const [cardError, setCardError] = useState('');
    const [clientSecrete, setClientSecret] = useState('');
    console.log(clientSecrete)


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            // send the product price.
            body: JSON.stringify({ productPrice }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setClientSecret(data.clientSecret)

            });
    }, [productPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (!card) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecrete,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: email,
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        console.log('paymentIntent', paymentIntent)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <CardElement className='bg-white'
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

                <p className='text-red-700'>{cardError}</p>
                <button
                    className=" my-5 border  rounded-lg pl-2 py-1 w-1/2 mx-auto text-center bg-gradient-to-r from-primary to-secondary text-black "
                // disabled={!stripe || !clientSecrete}
                > Pay
                </button>
            </form>
            {/* <p className='text-red-500'>{cardError}</p> */}
        </div>
    );
};

export default CheckoutForm;