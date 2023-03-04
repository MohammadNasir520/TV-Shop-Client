import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({ BookingProduct }) => {
    const { _id, productPrice, email, buyerName, productId } = BookingProduct;
    console.log(BookingProduct)
    const stripe = useStripe();
    const elements = useElements()

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [tranjactionId, setTranjactionId] = useState('');

    const [proccessing, setProcessing] = useState(false)

    const [clientSecrete, setClientSecret] = useState('');
    console.log(clientSecrete)


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`${process.env.REACT_APP_Base_url}/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

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

        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecrete,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {


            // set payment in database
            const payment = {
                productPrice,
                transactionId: paymentIntent.id,
                email,
                _id,
                productId

            }
            fetch(`${process.env.REACT_APP_Base_url}/payments`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess('Congratulation, Your payment Success')
                        setTranjactionId(paymentIntent.id)
                    }
                })
        }
        setProcessing(false)
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
                    disabled={!stripe || !clientSecrete || proccessing}
                > Pay
                </button>
            </form>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your TransactionId: <span>{tranjactionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;