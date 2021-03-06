/* eslint-disable no-case-declarations */

import moment from 'moment';

import {
  PUT_TO_STORE_DATA,
  PUT_PRODUCT_TO_BASKET,
  CHANGE_PRODUCT_IN_BASKET,
  DELETE_PRODUCT_FROM_BASKET,
  CLEAR_PRODUCTS,
} from '../actionTypes';


const products = (state = { products: [] }, action) => {
  const { payload } = action;
  // eslint-disable-next-line padded-blocks
  switch (action.type) {

    case PUT_TO_STORE_DATA:
      const timeOfLoadData = moment().format();
      return {
        ...state,
        products: payload,
        copyFromServer: payload,
        timeOfLoadData,
      };

    case PUT_PRODUCT_TO_BASKET:
      const newStateAfterPut = state.products.map(product => (
        product.id === payload.id ? ({ ...payload, isChosen: true }) : product
      ));
      return { ...state, products: newStateAfterPut };

    case CHANGE_PRODUCT_IN_BASKET:
      const newStateAfterChange = state.products.map(product => (
        product.id === payload.id && payload.count === 0
          ? ({ ...payload, isChosen: false }) : product
      ));
      return { ...state, products: newStateAfterChange };


    case DELETE_PRODUCT_FROM_BASKET:
      const newStateAfterDelete = state.products.map(product => (
        product.id === payload.id ? ({ ...payload, isChosen: false }) : product
      ));
      return { ...state, products: newStateAfterDelete };

    case CLEAR_PRODUCTS:
      return { ...state, products: (state.copyFromServer ? state.copyFromServer : []) };

    default:
      return state;
  }
};


export default products;
