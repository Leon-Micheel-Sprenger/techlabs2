import React from 'react';
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


const Header = () =>{
    return (
        <div className="header-container">
            <h2 className="intro-h2">HAPPYROUTES</h2>
            <div className="MenuIcon">
              <Link to="/menu"><MenuIcon fontSize='large' color='black'  /></Link>
            </div>
        </div>
    );
}
export default Header;
