import {createStore, applyMiddleware} from 'redux';
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducer);
const store = createStore(reducer,applyMiddleware(sagaMiddleware)); // 미들웨어도 배열식으로 여러개 넣을수잇어시만 이젠 applyMi-로 해서 쓸수잇게 지원해준다
sagaMiddleware.run(saga); // saga의 궁극적 목적은 ~ 어싱크한 놈들을 싱크하게 만들자~~

export default store;
