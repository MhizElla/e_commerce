import React from 'react'
import { Container, Typography, Button, Grid } from '@mui/material'




import useStyle from "./style";
import CartItem from './CartItem/CartItem';
const Cart = ({cart}) => {
    const isEmpty = !cart || !cart.line_items || cart.line_items.length === 0;
    const classes = useStyle();
    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no items in your shopping cart, start adding some!</Typography>

    );
    const FilledCart = () => (
        <>
        <Grid container spacing={5}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item} />

                </Grid>
            ))}

        </Grid>
        <div className={classes.cartDetail}>
            <Typography variant='h4'> subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
            <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
        </div>
        </>
    )
    if(!cart.line_items) return "loading....";
  return (
    <Container>
        <div className={classes.toolbar}/>
        <Typography  className={classes.title} variant='h3'>Your Shopping Cart</Typography>
        {isEmpty ? <EmptyCart /> : <FilledCart/> }
      
    </Container>
  )
}

export default Cart
