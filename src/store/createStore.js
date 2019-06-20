import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootreducer from './reducers';
import sagas from './sagas';
import { loadState, saveState } from './localStorage';

const initialState = loadState();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  name: 'MyApp',
  actionsBlacklist:
  ['@@redux-form/CHANGE', '@@redux-form/FOCUS', '@@redux-form/BLUR', '@@redux-form/UPDATE_SYNC_ERROR']
});

const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleware(rootreducer, initialState);

store.subscribe(() => {
  saveState({
    products: store.getState().products,
    basket: store.getState().basket,
    order: store.getState().order,
  });
});

sagaMiddleware.run(sagas);

export default store;
