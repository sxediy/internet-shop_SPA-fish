import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import products from './products';
import basket from './basket';
import order from './order';


export default combineReducers({
  products,
  basket,
  order,
  form: formReducer,
});
