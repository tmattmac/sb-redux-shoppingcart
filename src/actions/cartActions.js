const addToCart = (id) => {
  return {
    type: 'cart/addItem',
    payload: { id }
  }
}

const updateCartItemQuantity = (id, qty) => {
  return {
    type: 'cart/updateItemQuantity',
    payload: { id, qty }
  }
}

const removeCartItem = (id) => {
  return {
    type: 'cart/removeItem',
    payload: { id }
  }
}

export { addToCart, updateCartItemQuantity, removeCartItem };