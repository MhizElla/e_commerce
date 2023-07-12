import { useState, useEffect } from 'react';
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline} from '@mui/material';
import { Link } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';
import useStyles from './style';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details'];
const Checkout = ({cart, order, onCaptureCheckou, error}) => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutTaken, setCheckoutTaken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const classes = useStyles();
   

    useEffect(() => {
        const generateTaken = async () => {
            try {
                const taken = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
                console.log(taken);
                setCheckoutTaken(taken);
            } catch (error) {
               
            }
        }
        generateTaken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }
    
   
    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant='h5'>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname} lastName</Typography>
                <Divider className={classes.divider}/>
                <Typography variant='subtitle2'>Orde ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant='outlined' type='button'> Back to Home</Button>
        </>
        
    ) : (
        <div className={classes.spinner}>
            <CircularProgress/>
        </div>
    );

    if(error) {
        <>
            <Typography variant='h5'>Error: {error}</Typography>
            <br/>
            <Button component={Link} to="/" variant='outlined' type='button'> Back to Home </Button>

        </>
    }
       
    
      

      const Form = () => activeStep === 0
      ? <AddressForm checkoutTaken={checkoutTaken} next={next} />
      : <PaymentForm shippingData={shippingData} checkoutTaken={checkoutTaken} nextStep={nextStep} backStep={backStep} onCaptureCheckou={onCaptureCheckou}/>
    
  return (
    <>
        <CssBaseline />
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
                {activeStep === steps.length ? <Confirmation /> : checkoutTaken && <Form />}
            </Paper>
        </main>
      
    </>
  )
}

export default Checkout
