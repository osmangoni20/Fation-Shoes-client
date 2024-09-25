import { Elements, ElementsConsumer, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripe=useStripe()
    const elements=useElements()
    
    const stripePromise=loadStripe('pk_test_51IeMHCDxOVqYVf88Vca9XqWPlZtT7mHNsNvR5w46YemHApUUgOqLSNitfzyRQYSm3IBwUcMtDCsIWEzT4S6XclbD00FewspEPl')
    return (
        <div>
            <Elements stripe={stripePromise}>
            <ElementsConsumer>
      {({elements, stripe}) => (
        <CheckoutForm elements={elements} stripe={stripe} />
      )}
    </ElementsConsumer>
            </Elements>
        </div>
    );
};

export default Payment;