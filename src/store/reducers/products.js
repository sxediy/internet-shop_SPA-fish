import { PUT_TO_STORE_DATA } from '../actionTypes';


const products = (state = [], action) => {
  const arrayData = action.payload ? Object.values(action.payload) : [];
  switch (action.type) {
    case PUT_TO_STORE_DATA:
      return [...arrayData];
    default:
      return state;
  }
};


export default products;
