import { PUT_PRODUCT_TO_BASKET, DELETE_PRODUCT_IN_BASKET } from '../actionTypes';

const basket = (state = [], action) => {
  switch (action.type) {
    case PUT_PRODUCT_TO_BASKET: {
      const findFunc = product => product.id === action.payload.id;
      const findIndexExistProduct = state.findIndex(findFunc);
      const isExist = findIndexExistProduct !== -1;
      const count = isExist ? state[findIndexExistProduct].count + 1 : 1;
      const payload = { ...action.payload, count };
      const filterFunc = product => product.id !== action.payload.id;

      return [...state.filter(filterFunc), payload];
    }
    case DELETE_PRODUCT_IN_BASKET: {
      return [...state.filter(product => product.id !== action.payload.id)];
    }
    default:
      return state;
  }
};

export default basket;
