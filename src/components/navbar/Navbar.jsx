import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar= () =>{
    return (
        <nav className="navbar">
            <Link to="/">Map</Link> |{" "}
            <Link to="/login">Login</Link> |{" "}
            <Link to="/menu">Menu</Link>
        </nav>
    );
}
export default Navbar;