import { Button } from '@mui/material';
import React from 'react';
import './menu.css'
import { Link } from "react-router-dom";

const Menu = () =>{
    return (
        <div className="menu-component" >

            <div className="menu-container">
            <Link to="/"> <Button className="btn1" type="button"> Start a new Journey
               </Button> </Link>  <br/> <br/>
               <Button className="btn1" type="button" > my places</Button> <br/><br/><br/>
               <Button className="btn1" type="button" > community</Button> <br/> <br/><br/>
               <Link to="/login"> <Button className="btn1" type="button" > Login</Button></Link><br/><br/><br/>

            </div>
        </div>
    );
}
export default Menu;
