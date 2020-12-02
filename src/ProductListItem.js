import { Avatar, Box, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
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
  productImage: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    '& img': {
      objectFit: 'contain'
    }
  },
  productText: {
    flexGrow: 1
  },
  price: {
    color: theme.palette.secondary.main
  }
}));

const ProductListItem = ({ id }) => {
  const classes = useStyles();
  const item = useSelector(state => (
    state.products[id]
  ), shallowEqual);

  return (
    <Paper elevation={2} className={classes.root}>
      <Avatar variant="rounded" alt={item.name} src={item.image_url} className={classes.productImage} />
      <Box className={classes.productText}>
        <CustomLink variant="h6" to={`/products/${id}`}>
          {item.name}
        </CustomLink>
        <Typography className={classes.price}>${item.price}</Typography>
      </Box>
      <CartQuantityWidget id={id} />
    </Paper>
  )
}

export default ProductListItem;