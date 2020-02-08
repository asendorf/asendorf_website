import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import './index.css';
//import * as serviceWorker from './serviceWorker'

console.log("This is the process.env", process.env.PUBLIC_URL)

render(
        <HashRouter basename='/'>
          <App />
        </HashRouter>,
        document.querySelector("#root")
)

//serviceWorker.unregister()
