import { createStore, applyMiddleware, compose  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './recucer'
import todoSagas from './sagas'

const sagaMidddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware(sagaMidddleware)
);

const store = createStore(reducer, enhancer)
sagaMidddleware.run(todoSagas)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store