import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import Cart from './Cart';

const Routes = () => {
  return (
    <Switch>
      <Route path="/products/:id">
        <ProductDetail />
      </Route>
      <Route path="/products">
        <ProductList />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route>
        <Redirect to="/products" />
      </Route>
    </Switch>
  )
}

export default Routes;