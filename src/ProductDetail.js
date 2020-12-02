import { Grid, Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import CartQuantityWidget from './CartQuantityWidget';
import CustomLink from './CustomLink';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '&>*': {
      margin: theme.spacing(1)
    }
  },
  price: {
    color: theme.palette.secondary.main
  },
  description: {
    margin: theme.spacing(2, 0)
  },
  productImage: {
    maxWidth: '100%'
  }
}));

const ProductDetail = () => {
  const classes = useStyles();
  const { id } = useParams();
  const item = useSelector(state => (
    state.products[id]
  ), shallowEqual);

  if (!item) return <Redirect to="/products" />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Box>
          <img alt={item.name} src={item.image_url} className={classes.productImage} />
        </Box>
      </Grid>
      <Grid item xs={12} md={9}>
        <CustomLink variant="h6" to={`/products/${id}`}>
          {item.name}
        </CustomLink>
        <Typography variant="body1" className={classes.price}>${item.price}</Typography>
        <Typography variant="body1" className={classes.description}>{item.description}</Typography>
        <CartQuantityWidget id={id} qtyLabel={
          <Typography variant="h6">Quantity:</Typography>
        } />
      </Grid>
    </Grid>
  )
}

export default ProductDetail;