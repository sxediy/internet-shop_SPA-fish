import { CHECKOUT, CLEAR_DATA } from '../actionTypes';


const order = (state = {}, action) => {
  switch (action.type) {
    case CHECKOUT: {
      const { basket: shipment, summaryPrice } = action.payload;
      return { ...state, shipment, summaryPrice };
    }
    case CLEAR_DATA:
      return {};
    default:
      return state;
  }
};


export default order;
