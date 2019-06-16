import { CHECKOUT, SUBMIT_DATA } from '../actionTypes';


const order = (state = {}, action) => {
  switch (action.type) {
    case CHECKOUT: {
      const { basket: shipment, summaryPrice } = action.payload;
      return { ...state, shipment, summaryPrice };
    }
    case SUBMIT_DATA:
      return { ...state };
    default:
      return state;
  }
};


export default order;
