import React, { useState, useRef } from 'react';
import './dialog.css'
import Button from '@mui/material/Button';


  const Location = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const coordinates = [];


  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.watchPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        coordinates.push([position.coords.latitude, position.coords.longitude]);
        window.localStorage.setItem("coordinates", JSON.stringify(coordinates));

      }, () => {
        console.log('Unable to retrieve your location');
      });
    }
  }

  const stopLocation = () => {
        navigator.geolocation.clearWatch(getLocation);
      console.log("location stopped");
    }

  return (
    <div className="Location">
      <Button className="btn" variant="outlined" onClick={getLocation}>
          Start Journey
      </Button>
      <Button className="btn" variant="outlined" onClick={stopLocation}>
          Stop Journey
      </Button>
    </div>
  );
}
export default Location;
