import productListReducer from './productListReducer';

test('has products', () => {
  const state = productListReducer(undefined, {});
  expect(Object.keys(state)).not.toHaveLength(0);
});