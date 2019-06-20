import { CHECKOUT, CLEAR_ORDER } from '../actionTypes';


const order = (state = {}, action) => {
  switch (action.type) {
    case CHECKOUT: {
      const { basket: shipment, summaryPrice } = action.payload;
      return { ...state, shipment, summaryPrice };
    }
    case CLEAR_ORDER:
      return {};
    default:
      return state;
  }
};


export default order;
