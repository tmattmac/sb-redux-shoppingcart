import cartReducer from './cartReducer';

describe('cartReducer', () => {
  let state;
  beforeEach(() => {
    state = cartReducer(undefined, {});
  });

  test('state begins empty', () => {
    expect(Object.keys(state)).toHaveLength(0);
  });
  test('can add to cart', () => {
    state = cartReducer(state, {
      type: 'cart/addItem',
      payload: { id: 'test' }
    });
    expect(Object.keys(state)).toHaveLength(1);
    expect(state['test']).toEqual({ qty: 1 });
  });
  test('can remove from cart', () => {
    state = cartReducer(state, {
      type: 'cart/addItem',
      payload: { id: 'test' }
    });
    state = cartReducer(state, {
      type: 'cart/removeItem',
      payload: { id: 'test' }
    });
    expect(Object.keys(state)).toHaveLength(0);
  });
  test('can update cart qty', () => {
    state = cartReducer(state, {
      type: 'cart/addItem',
      payload: { id: 'test' }
    });
    state = cartReducer(state, {
      type: 'cart/updateItemQuantity',
      payload: { id: 'test', qty: 5 }
    });
    expect(Object.keys(state)).toHaveLength(1);
    expect(state['test']).toEqual({ qty: 5 });
  });
  test('updating qty to 0 removes item', () => {
    state = cartReducer(state, {
      type: 'cart/addItem',
      payload: { id: 'test' }
    });
    state = cartReducer(state, {
      type: 'cart/updateItemQuantity',
      payload: { id: 'test', qty: 0 }
    });
    expect(Object.keys(state)).toHaveLength(0);
  });
});