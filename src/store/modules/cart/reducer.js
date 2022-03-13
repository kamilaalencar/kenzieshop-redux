import { ADD_CART, REMOVE_CART } from "./actionsTypes";

const initialState = JSON.parse(localStorage.getItem("cart"));

const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];
    case REMOVE_CART:
      const { remove } = action;
      return [remove];
    default:
      return state;
  }
};
export default reducerCart;
