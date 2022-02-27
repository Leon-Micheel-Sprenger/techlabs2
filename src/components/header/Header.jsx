import React from 'react';
import Navbar from "../navbar/Navbar";
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import LocationDialog from "../dialog/LocationDialog";
import WidthAndHeight from "../Resp/Respo"

const Header = () =>{
    return (
        <div className="header-container">
            <h2 className="intro-h2">MAPPER</h2>
            <div className="MenuIcon">
              <Link to="/menu"><MenuIcon fontSize='large' color='black'  /></Link>
            </div>
        </div>
    );
}
export default Header;
