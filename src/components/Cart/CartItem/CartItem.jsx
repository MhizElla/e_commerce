import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'


import useStyle from "./style"

function CartItem({item}) {
    const classes = useStyle();
  return (
    <Card>
        <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
        <CardContent className={classes.cardContent}>
            <Typography variant='h4'>{item.name}</Typography>
            <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>

        <CardActions className={classes.cardActions}>
            <div className={classes.buttons}>
                <button type='button' size="small">-</button>\
                <Typography>{item.quantity}</Typography>
                <button type='button' size="small">+</button>
            </div>
            <button variant="contained" type='button' color='secondary'>Remove</button>

        </CardActions>
      
    </Card>
  )
}

export default CartItem
