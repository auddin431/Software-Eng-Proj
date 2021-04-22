import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

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
                <Button variant="contained" color="default" disableElevation>
                    Enter Information
                </Button>
            </StripeCheckout>
        )
    }
}

export default PaymentStripe;
