import { PUT_TO_STORE_DATA } from '../actionTypes';


const products = (state = [], action) => {
  switch (action.type) {
    case PUT_TO_STORE_DATA:
      return [...action.payload];
    default:
      return state;
  }
};


export default products;
