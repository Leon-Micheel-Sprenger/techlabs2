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

/**
 * Header = alles was oben ist in blau z.B. "Willkommmen bei Happy Routes" und die NavBar
 * Outlet = der sogenannte "Body" einer Seite z.B. die GoogleMaps Karte
 * Footer = Die Fußzeile jeder Seite
 * (Das ist der Standardaufbau von Internetseiten: Header, Body, Footer)
 */
