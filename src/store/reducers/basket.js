import {
  PUT_PRODUCT_TO_BASKET,
  DELETE_PRODUCT_FROM_BASKET,
  CHANGE_PRODUCT_IN_BASKET,
  CLEAR_BASKET,
} from '../actionTypes';

const basket = (state = [], action) => {
  const payloadID = action.payload ? action.payload.id : undefined;
  const findFunc = product => product.id === payloadID;
  const findIndexExistProduct = state.findIndex(findFunc);
  const isExist = findIndexExistProduct !== -1;
  const filterFunc = product => product.id !== payloadID;

  const reduceFunc = (accum, current) => {
    if (current.id !== payloadID) {
      return [...accum, current];
    }
    if (action.payload.count > 0) {
      return [...accum, action.payload];
    }
    return accum;
  };

  switch (action.type) {
    case PUT_PRODUCT_TO_BASKET: {
      const count = isExist ? state[findIndexExistProduct].count + 1 : 1;
      const payload = { ...action.payload, count };
      return [...state.filter(filterFunc), payload];
    }

    case DELETE_PRODUCT_FROM_BASKET: {
      return [...state.filter(filterFunc)];
    }

    case CHANGE_PRODUCT_IN_BASKET: {
      return [...state.reduce(reduceFunc, [])];
    }

    case CLEAR_BASKET:
      return [];

    default:
      return state;
  }
};

export default basket;
