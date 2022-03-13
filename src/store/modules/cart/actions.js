import { ADD_CART, REMOVE_CART } from "./actionsTypes";

export const add = (product) => ({
  type: ADD_CART,
  product,
});

export const remove = (list) => ({
  type: REMOVE_CART,
  list,
});
