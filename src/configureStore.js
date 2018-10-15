import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import ghData from 'containers/ReposList/saga';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware, logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, fromJS(initialState), middlewareEnhancer);
  sagaMiddleware.run(ghData);

  return store;
}
