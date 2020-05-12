import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_wsj2n61Zqvyu0u7FquBenGF000uoi00q0Q';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    };

    return (
        <StripeCheckout 
            label='Pay now'
            name='CWRN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;