import { put, takeEvery } from 'redux-saga/effects';
import * as products from 'src/products.json';


function* sagaPutToStoreData() {
  yield put({ type: 'PUT_TO_STORE_DATA', payload: products });
}

function* sagaPutProductToBasket() {
  yield put({ type: 'PUT_TO_STORE_DATA', payload: products });
}

export default function* () {
  yield takeEvery(
    'GET_PRODUCTS', sagaPutToStoreData,
    'PUT_PRODUCT_TO_BASKET', sagaPutProductToBasket,
  );
}
