import React from "react";
import ReactDom from "react-dom/client";

import { BrowserRouter } from 'react-router-dom'

import App from "./App";

const Root = ReactDom.createRoot(document.getElementById('root'))

Root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

)