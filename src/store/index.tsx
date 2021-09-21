// ...
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import dataReducer from './reducer'
import rootsaga from './saga';
const sagaMiddleware = createSagaMiddleware()

const store  = createStore(dataReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootsaga)
export default store