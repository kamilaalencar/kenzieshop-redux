import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerCart from "./modules/cart/reducer";
import { productReducer } from "./modules/products/reducer";

const reducers = combineReducers({
  product: productReducer,
  cart: reducerCart,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
