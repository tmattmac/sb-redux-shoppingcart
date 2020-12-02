import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Box, Typography, Grid, makeStyles } from '@material-ui/core';
import ProductListItem from './ProductListItem';

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: theme.spacing(2)
  },
  total: {
    marginTop: theme.spacing(2)
  }
}));

const Cart = () => {
  const classes = useStyles();
  // items = [[id, qty]...]
  const items = useSelector(state => (
    Object.keys(state.cart)
      .map(id => [id, state.cart[id].qty])
  ), shallowEqual);

  const totalPrice = useSelector(state => (
    items.reduce((total, item) => (
      total + state.products[item[0]].price * item[1] // item = [id, qty]
    ), 0)
  ));

  return (
    <Box>
      <Typography variant="h3" className={classes.header}>Your Cart</Typography>
      {items.length > 0 ?
        <Grid container spacing={3}>
          {items.map(([id]) => (
            <Grid item key={id} xs={12}>
              <ProductListItem id={id} />
            </Grid>
          ))}
        </Grid>
        :
        <Typography variant="body1">Your cart is currently empty.</Typography>
      }
      <Typography variant="h5" className={classes.total}>Total: ${totalPrice}</Typography>
    </Box>
  )
}

export default Cart;