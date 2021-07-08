import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import createdBookReducer from '../reducers/createdBookReducer';
// import booksListReducer from '../reducers/booksListReducer';
// import bookDetailReducer from '../reducers/bookDetailsReducer';
import { cardReducer } from '../reducers/cardReducers';
import { productsReducer, productDetailsReducer } from '../reducers/productReducers';

const middleware = [thunk];

const reducer = combineReducers({
  // bookCreated: createdBookReducer,
  // booksList: booksListReducer,
  // bookDetails: bookDetailReducer,
  card: cardReducer,
  products: productsReducer,
  productDetails: productDetailsReducer
});

const cardItemsInLocalStorage = localStorage.getItem('card')
  ? JSON.parse(localStorage.getItem('card'))
  : [];

const initialState = {
  card: {
    cardItems: cardItemsInLocalStorage
  }
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
