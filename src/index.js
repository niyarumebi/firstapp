import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './scss/style.scss';
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import store from "./redux/store";
import {HISTORY} from './helpers/HistoryHelper';


ReactDOM.render(
  <Provider store={store}>
      <Router history={HISTORY}>
          <App/>
      </Router>
  </Provider>, document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './scss/style.scss'
// import {BrowserRouter} from "react-router-dom";
// import store from './redux/store';
// import Action from "./redux/action";
// //index.js에서 store 콘솔을 찍어도 찍히는 이유는 store가 앱을 감싸서 먼저 만들어져잇기대문이다.
// console.log("@@ store", store);
// const state = store.getState();
// console.log("@@ preState", state);
//
//
// // store.dispatch(Action.Creators.openSidebar(true));
// // const newState = store.getState();
// // console.log("@@ state after action openSidebar", newState); //위에 state변수는 index.js내에서 바뀌기 전의 갑이니가 다시 getState해와야 바뀐값이 콘솔 찍힌것
// //리액트의 가상돔에는 리덕스의 기능이 없다. >> '프로바이더'라는 걸로 감싸서 관리해줘야한다. :: react-redux 연결해주는애임
// import {Provider} from 'react-redux'; //
//
//
// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App/>
//         </BrowserRouter>
//     </Provider>, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './scss/style.scss'
// import {BrowserRouter, Router} from "react-router-dom";
// import store from './redux/store';
// import {Provider} from 'react-redux';
// import {HISTORY} from './helpers/HistoryHelper';
//
//
// ReactDOM.render(
//     <Provider store={store}>
//         {/*<BrowserRouter>*/}
//             {/*<App />*/}
//         {/*</BrowserRouter>*/}
//         <Router history={HISTORY}>
//             <App/>
//         </Router>
//     </Provider>, document.getElementById('root'));