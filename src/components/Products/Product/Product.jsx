import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import useStyles from './styles';


const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    
    

  return (
        <Card className={classes.root}>
            <CardMedia 
                className={classes.image}
                image={product.image.url}
                component='img' 
                title={product.name}/>
            <CardContent className={classes.cardcontent}>
                <Typography variant='h6' gutterBottom>
                    {product.name}
                </Typography>

                <Typography className={classes.price} variant='h6'>
                    {product.price.formatted_with_symbol}
                </Typography>
                <Typography dangerouslySetInnerHTML={{ __html: product.description}} className={classes.description} variant='body2' color="textSecondary"/>

            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCartIcon  />
                </IconButton>

            </CardActions>
      
        </Card>
    );
}

export default Product
