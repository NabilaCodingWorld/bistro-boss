import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SectionTitle from '../../../cpmponents/SectionTitle/SectionTitle';
import CheckForm from './CheckForm';
import useCart from '../../../hooks/useCart';

const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

    const [cart] = useCart();

    const total = cart.reduce((sum, item) => sum + item.price, 0 )
    
    const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>

            {/* <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2> */}

            <Elements stripe={stripePromise}>
                <CheckForm cart={cart} price={price}></CheckForm>
            </Elements>
            
        </div>
    );
};

export default Payment;