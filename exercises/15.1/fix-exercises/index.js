const Redux = require('redux');

// const ESTADO_INICIAL = {
//     login: false,
//     email: "",
//   };
  
//   const reducer = (state = ESTADO_INICIAL) => {
//     return state;
//   };
  
//   const store = Redux.createStore(reducer);
  
//   console.log(store.getState());
  
  //{ login: false, email: '' }

// --------------------------------------------------------------

// const fazerLogin = (email) => ({
//     type: "LOGIN",
//     email});
  
//   const ESTADO_INICIAL = {
//     login: false,
//     email: "",
//   };
  
//   const reducer = (state = ESTADO_INICIAL, action) => {
//     switch (action.type) {
//       case "LOGIN":
//         return {
//           ...state,
//           login: !state.login,
//           email: action.email,
//         };
//       default: 
//         return state;
//     }
//   };
  
//   const store = Redux.createStore(reducer);
  
//   store.dispatch(fazerLogin("alguem@email.com"));
  
//   console.log(store.getState());
  
  // { login: true, email: 'alguem@email.com' }

//   --------------------------------------------------------------------------

// Arquivo index.js

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';


const reducerCombinado = combineReducers({
meuReducer,
meuOutroReducer});

export default reducerCombinado;