import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";

render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="menu" element={<Menu/>}/>
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);



reportWebVitals();
