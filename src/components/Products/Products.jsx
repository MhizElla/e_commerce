import React from 'react';
import { Grid } from '@mui/material';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Runing Shoes.',  price: '$5', image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg.webp' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$10', image: 'https://cdn.wccftech.com/wp-content/uploads/2021/08/M1X-MacBook-Pro-768x384.jpg.webp' },
    { id: 3, name: 'Phone', description: 'Apple Phone.', price: '$20', image: 'https://cdn.arstechnica.net/wp-content/uploads/2022/09/apple_iphone-12_super-retina-xdr-display_10132020-800x450.jpg' },
    { id: 4, name: 'Macbook', description: 'Apple Macbook.', price: '$10', image: 'https://cdn.wccftech.com/wp-content/uploads/2021/08/M1X-MacBook-Pro-768x384.jpg.webp' },

];


const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
    
}
export default Products