import { add, remove } from "./actions";

export const addCartThunk = (product) => {
  return (dispatch, getStore) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    list.push(product);
    localStorage.setItem("cart", JSON.stringify(list));
    dispatch(add(product));
  };
};

export const removeCartThunk = (product) => {
  return (dispatch, getStore) => {
    const { cart } = getStore();
    const list = [];
    for (let i = 0; i < cart.length; i++) {
      if (i !== cart.indexOf(product)) {
        list.push(cart[i]);
      }
    }
    localStorage.setItem("cart", JSON.stringify(list));
    console.log(cart);
    dispatch(remove(list));
  };
};
