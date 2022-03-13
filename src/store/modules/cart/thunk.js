import { add, remove } from "./actions";

export const addCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const newList = [...list, product];
  localStorage.setItem("cart", JSON.stringify(newList));
  dispatch(add(product));
};

export const removeCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const removeList = list;

  const local = removeList.indexOf(
    removeList.find((element) => element.name === product.name)
  );
  removeList.splice(local, 1);
  localStorage.setItem("cart", JSON.stringify(removeList));
  dispatch(remove(product));
};
