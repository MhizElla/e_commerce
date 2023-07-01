import { useState, useEffect } from 'react';
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@mui/material';

import { commerce } from '../../../lib/commerce';
import useStyles from './style';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details'];
const Checkout = ({cart}) => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutTaken, setCheckoutTaken] = useState(null);
    const classes = useStyles();
    useEffect(() => {
        const generateTaken = async () => {
            try {
                const taken = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
                setCheckoutTaken(taken);
            } catch (error) {
                
            }
        }
        generateTaken();
    }, []);

   
    const Confirmation = () => {
        return (
          <div>
            Confirmation
          </div>
        );
      }
      

    const Form = () => activeStep === 0
        ? <AddressForm checkoutTaken={checkoutTaken}/>
        : <PaymentForm />
  return (
    <>
    <div className={classes.toolbar}/>
    <main className={classes.layout}>
        <Paper className={classes.paper}>
            <Typography variant='h4' align='center'>Checkout</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((step) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}

            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
    </main>
      
    </>
  )
}

export default Checkout
