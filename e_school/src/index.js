import React from "react";
import ReactDom from "react-dom/client";

import { BrowserRouter } from 'react-router-dom'

import store from './redux/store'
import { Provider } from 'react-redux'

import App from "./App";

const Root = ReactDom.createRoot(document.getElementById('root'))

Root.render(
    <BrowserRouter>
       <Provider store={store}>
          <App />
     </Provider>
    </BrowserRouter>

)