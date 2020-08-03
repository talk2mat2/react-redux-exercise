import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import * as serviceWorker from './serviceWorker';
import {PersistGate} from "redux-persist/integration/react"
// import  persistor from './store'
import  * as storefile from './store'
import { Provider } from 'react-redux';

const Render= ()=>{
  ReactDOM.render(
    <Provider store={storefile.store} >
      <PersistGate loading={null} persistor={storefile.persistor}>
      <App />
      </PersistGate>
 
    </Provider> ,
    
    document.getElementById('root')
  );
}

Render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
