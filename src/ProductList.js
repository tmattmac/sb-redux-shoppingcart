import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Box, Typography, Grid, makeStyles } from '@material-ui/core';
import ProductListItem from './ProductListItem';

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: theme.spacing(2)
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const products = useSelector(state => (
    Object.keys(state.products)
  ), shallowEqual);

  return (
    <Box>
      <Typography variant="h3" className={classes.header}>Products</Typography>
      <Grid container spacing={3}>
        {products.map(id => (
          <Grid item key={id} xs={12}>
            <ProductListItem id={id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ProductList;