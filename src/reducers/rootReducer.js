import { combineReducers } from 'redux';
import cart from './cartReducer';
import products from './productListReducer';

const rootReducer = combineReducers({ cart, products });

export default rootReducer;