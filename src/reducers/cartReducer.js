const INIT_STATE = {};

const cartReducer = (state = INIT_STATE, action) => {
  let id, qty, newState;
  switch (action.type) {
    case 'cart/addItem':
      id = action.payload.id;
      if (!id) return state;

      newState = { ...state };
      if (newState[id]) newState[id].qty += 1;
      else newState[id] = { qty: 1 };
      return newState;
    
    case 'cart/updateItemQuantity':
      id = action.payload.id;
      qty = action.payload.qty;
      if (!state[id] || isNaN(qty)) return state;

      newState = { ...state };
      if (qty < 1) delete newState[id];
      else newState[id] = { ...newState[id], qty };
      return newState;

    case 'cart/removeItem':
      id = action.payload.id;
      if (!state[id]) return state;

      newState = { ...state };
      delete newState[id];
      return newState;

    default:
      return state;
  }
}

export default cartReducer;