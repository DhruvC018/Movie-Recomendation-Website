import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';

//We can have multiple middlewares

//here we see a curried fucntion. 
//can also be expressed as function logger(obj,next,action) //here the obj is {dispatch,getState}.
//using currying Expressd aslogger(obj)(next)(action)

// const logger = function ({dispatch, getState}) { //these are the simple parameters containing the dispatch and getState.
//   return function(next){ //currying used here.
//     return function (action){
//       //middleware code
//       console.log("ACTION_TYPE = ", action.type);
//       next(action); //we don't want out app to be stuck and we want it to continue to move on. Hence we do the next like we do a next in a linkedlist.
//     }
//   }
// }

const logger = ({dispatch, getState}) => (next) => (action) => {
  console.log("ACTION_TYPE = ", action.type);
  next(action);
}

//movies is the reducer name.
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('store',store);
// console.log('Before sending the action state',store.getState());

// store.dispatch({  //returns an object because the action is an object in itself
//   type: "ADD_MOVIES",
//   movies: [{name: 'Superman'}]
// });

// console.log('After sending the action state',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
