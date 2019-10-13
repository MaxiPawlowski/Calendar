import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import sagas from 'sagas';
import rootReducer from 'reducers';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middleware = [
  sagaMiddleware
];

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

sagaMiddleware.run(sagas);

export default store;
