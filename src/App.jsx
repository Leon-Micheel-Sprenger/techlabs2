import React, { useState, render } from 'react';
import {Link, Outlet} from "react-router-dom";

import './App.css'
import Header from "./components/header/Header";



export default function App() {
    return (
        <div>
            <Header/>
            <Outlet/>

        </div>
    )
}

