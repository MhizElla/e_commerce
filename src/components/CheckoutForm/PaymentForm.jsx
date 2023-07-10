import React from 'react'
import { Typography, Button, Divider } from '@mui/material'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Reviews } from '@mui/icons-material'

import Review from './Review';

const PaymentForm = ({ checkoutTaken }) => {
  return (
    <>
      <Review checkoutTaken={checkoutTaken} />
    </>
  );
};

export default PaymentForm
