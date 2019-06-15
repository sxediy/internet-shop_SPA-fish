import { combineReducers } from 'redux';
import products from './products';
import basket from './basket';
import order from './order';


export default combineReducers({
  products,
  basket,
  order,
});
