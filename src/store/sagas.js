import { put, takeEvery } from 'redux-saga/effects';
import * as products from 'src/products.json';


function* sagaPutToStoreData() {
  try {
    yield put({ type: 'PUT_TO_STORE_DATA', payload: products.default });
    yield put({ type: 'CLEAR_BASKET' });
  } catch (error) {
    yield put({ type: 'FAILED_PROCESSING_DATA', payload: error.message, error: true });
  }
}

function* resetStateSaga() {
  yield put({ type: 'CLEAR_ORDER' });
  yield put({ type: 'CLEAR_BASKET' });
  yield put({ type: 'CLEAR_PRODUCTS' });
}

export default function* () {
  yield takeEvery('GET_PRODUCTS', sagaPutToStoreData);
  yield takeEvery('RESET_STATE', resetStateSaga);
}
