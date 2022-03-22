//@ts-ignore
import  { createStore,applyMiddleware } from "redux";
import rootReducer from '@/redux/reducers';
import  SagaMiddleware from 'redux-saga';
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
const sagaMiddleware = SagaMiddleware()
const middleware = applyMiddleware(thunk,sagaMiddleware,createLogger())
export default createStore(rootReducer,undefined,middleware);