import React from 'react';
import './footer.css'
import LocationDialog from "../dialog/LocationDialog";
import Location from "../dialog/location";
import WidthAndHeight from "../Resp/Respo"

const Footer = () =>{
    return (

    <div className="footer-container">
    <div className="start-Journey-container" style={{display:'inline-block'}}>
      <Location/>
    </div>
    <br></br>
    <br></br>
    <br></br><br></br><br></br>
  
    <div className="add-location-container" style={{display:'inline-block'}}>
      <LocationDialog/>
    </div>
    
    
</div>

    );
}
export default Footer;
