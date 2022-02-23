import React from 'react';
import './footer.css'
import LocationDialog from "../dialog/LocationDialog";

const Footer = () =>{
    return (
        <div className="footer-container">
           <div className="add-location-container">
            <LocationDialog/>
        </div>

        </div>
    );
}
export default Footer;

