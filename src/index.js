import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';


//movies is the reducer name.
const store = createStore(rootReducer);
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
