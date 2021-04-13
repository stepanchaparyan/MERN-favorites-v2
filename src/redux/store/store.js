import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import createdBookReducer from '../reducers/createdBookReducer';
// import booksListReducer from '../reducers/booksListReducer';
// import bookDetailReducer from '../reducers/bookDetailsReducer';
import { cartReducer } from '../reducers/cartReducers';
import { productsReducer, productDetailsReducer } from '../reducers/productReducers';

const middleware = [thunk];

const reducer = combineReducers({
  // bookCreated: createdBookReducer,
  // booksList: booksListReducer,
  // bookDetails: bookDetailReducer,
  cart: cartReducer,
  products: productsReducer,
  productDetails: productDetailsReducer
});

const cartItemsInLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const initialState = {
  cart: {
    cartItems: cartItemsInLocalStorage
  }
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
