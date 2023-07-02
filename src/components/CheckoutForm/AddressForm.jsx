import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@mui/material';
import {useForm, FormProvider} from 'react-hook-form';


import { commerce } from '../../lib/commerce';
import CustomTextField from './CustomTextField';


const AddressForm = ({ checkoutTaken }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name}))
   

    const fetchShippingCountries = async (checkoutTakenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTakenId);
        
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }


    useEffect(() => {
        if (checkoutTaken && checkoutTaken.id) {
          fetchShippingCountries(checkoutTaken.id);
        }
      }, [checkoutTaken]);
      
      
   
  return (
    <>
      <Typography variant='h6' gutterBottom>Shipping Address</Typography>
      <FormProvider {... methods}>
        <form onSubmit=''>
            <Grid container spacing={3}>
                <CustomTextField required name='first Name' label='First name'/>
                <CustomTextField required name='last Name' label='Last name'/>
                <CustomTextField required name='address1' label='Address'/>
                <CustomTextField required name='email' label='Email'/>
                <CustomTextField required name='city' label='City'/>
                <CustomTextField required name='zip' label='Zip / postal code'/>
                <Grid item xs={12} sm={6}>
                    <InputLabel>Shipping Country</InputLabel>
                    <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                        {countries.map((country) => (
                            <MenuItem key={country.id} value={country.id}>
                                {country.id}
                            </MenuItem>
                        ))}
                        
                    </Select>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                    <InputLabel>Shipping Subdivision</InputLabel>
                    <Select value={} fullWidth onChange={}>
                        <MenuItem key={} value={}>
                        Select me
                        </MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel>Shipping Options</InputLabel>
                    <Select value={} fullWidth onChange={}>
                        <MenuItem key={} value={}>
                        Select me
                        </MenuItem>
                    </Select>
                </Grid> */}
            </Grid>

        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm
