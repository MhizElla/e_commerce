import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@mui/material';
import {useForm, FormProvider} from 'react-hook-form';

import CustomTextField from './CustomTextField';

const AddressForm = () => {
    const methods = useForm();
  return (
    <>
      <Typography variant='h6' gutterBottom>Shipping Address</Typography>
      <FormProvider {... methods}>
        <form onSubmit=''>
            <Grid container spacing={3}>
                <CustomTextField required name='first Name' label='first name'/>

            </Grid>

        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm
