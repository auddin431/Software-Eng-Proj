import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class PaymentStripe extends Component {
    render() {
        return (
            <StripeCheckout
                name="ICA"
                description="Pay for your items"
                //amount={2734}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Enter Information
                </button>
            </StripeCheckout>
        )
    }
}

export default PaymentStripe;
