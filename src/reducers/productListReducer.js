import data from '../data.json';

const productListReducer = (state = data.products, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default productListReducer;