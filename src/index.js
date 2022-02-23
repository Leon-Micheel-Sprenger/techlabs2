import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./components/login/Login";
import Map from "./components/home/Home";
import Menu from "./components/menu/Menu";

render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Map/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="menu" element={<Menu/>}/>
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

/* Alle Routen unter '/' erben das UI von '/'. So kann man bspw. die Navbar in jedem Screen sehen. */

//<App />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
