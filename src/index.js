import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import './index.css';
//import * as serviceWorker from './serviceWorker'

console.log("This is the process.env", process.env.PUBLIC_URL)

render(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>,
        document.querySelector("#root")
)

//serviceWorker.unregister()
