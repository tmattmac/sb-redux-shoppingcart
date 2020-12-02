import { Box, Button, makeStyles, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Add, Remove, Delete } from '@material-ui/icons';
import {
  addToCart,
  removeCartItem,
  updateCartItemQuantity
} from './actions/cartActions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  qty: {
    width: '1em',
    textAlign: 'center'
  }
}));

const CartQuantityWidget = ({ id, qtyLabel = null }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const qty = useSelector(state => {
    if (!state.cart[id]) return 0;
    return state.cart[id].qty;
  });

  const handleAddItem = () => {
    dispatch(addToCart(id));
  }

  const handleUpdateQty = (amt) => {
    const newQty = Math.max(qty + amt, 0);
    dispatch(updateCartItemQuantity(id, newQty));
  }

  const handleRemoveItem = () => {
    dispatch(removeCartItem(id));
  }

  if (qty === 0) return (
    <Button onClick={handleAddItem}>Add to Cart</Button>
  );

  return (
    <Box className={classes.root}>
      {qtyLabel}
      <IconButton onClick={() => handleUpdateQty(-1)}>
        <Remove />
      </IconButton>
      <Typography className={classes.qty}>{qty}</Typography>
      <IconButton onClick={() => handleUpdateQty(+1)}>
        <Add />
      </IconButton>
      <IconButton onClick={handleRemoveItem}>
        <Delete />
      </IconButton>
    </Box>
  )
}

export default CartQuantityWidget;