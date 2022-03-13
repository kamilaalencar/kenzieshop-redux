import { createStore, combineReducers, applyMiddleware } from "redux";
import { productReducer } from "./modules/products/reducer";
import thunk from "redux-thunk";
import reducerCart from "./modules/cart/reducer";

const reducers = combineReducers({
  product: productReducer,
  cart: reducerCart,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
