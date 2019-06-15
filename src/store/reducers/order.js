import { RECEIVE_DATA, REMOVE_DATA } from '../actionTypes';

const order = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return [...state, action.payload];
    case REMOVE_DATA:
      return [...state.filter(picture => picture.id !== action.payload)];
    default:
      return state;
  }
};

export default order;
