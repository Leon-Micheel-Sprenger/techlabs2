import React from 'react';
import './footer.css'
import LocationDialog from "../dialog/LocationDialog";
import Location from "../dialog/location";
import WidthAndHeight from "../Resp/Respo"

const Footer = () =>{
    return (

    <div className="footer-container">
    <div className="add-location-container" style={{display:'inline-block'}}>
      <LocationDialog/>
    </div>
    <div className="start-Journey-container" style={{display:'inline-block'}}>
      <Location/>
    </div>
</div>

    );
}
export default Footer;
