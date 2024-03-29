import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import createdBookReducer from '../reducers/createdBookReducer';
// import booksListReducer from '../reducers/booksListReducer';
// import bookDetailReducer from '../reducers/bookDetailsReducer';
import { cartsReducer } from '../reducers/cartsReducers';
import { productsReducer, productDetailsReducer } from '../reducers/productReducers';

const middleware = [thunk];

const reducer = combineReducers({
  // bookCreated: createdBookReducer,
  // booksList: booksListReducer,
  // bookDetails: bookDetailReducer,
  shopingCart: cartsReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
