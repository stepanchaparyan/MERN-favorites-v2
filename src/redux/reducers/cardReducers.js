import * as actionTypes from '../constants/cardConstants';

export const cardReducer = (state = { cardItems: [] }, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CARD:
      const item = payload;

      const existItem = state.cardItems.find(x => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cardItems: state.cardItems.map(x => (x.product === existItem.product ? item : x))
        };
      } else {
        return {
          ...state,
          cardItems: [...state.cardItems, item]
        };
      }
    case actionTypes.REMOVE_FROM_CARD:
      return {
        ...state,
        cardItems: state.cardItems.filter(x => x.product !== payload)
      };
    default:
      return state;
  }
};
