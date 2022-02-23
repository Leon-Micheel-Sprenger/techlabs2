import React from 'react'

import './home.css'
import {Icon} from "@iconify/react/dist/iconify";
import locationIcon from "@iconify/icons-mdi/map-marker";
import GoogleMapReact from "google-map-react";
import MapPopup from "../dialog/LocationDialog";
import LocationDialog from "../dialog/LocationDialog";
import Footer from "../footer/Footer";

const location = {
    address: 'Görli',
    lat: 52.49632997574632,
    lng: 13.437847871710412,
}
const defaultProps = {
    center: {
        lat: 10.99835602,
        lng: 77.01502627
    },
    zoom: 17
};
const LocationPin = ({ text }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
)

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {locations: [{
                address: 'Initial Pin',
                lat: 52.49632997574632,
                lng: 13.437847871710412,
            }]};
    }

    render(){
        return (
            <div className="map">
                <div className="google-map">
                    <GoogleMapReact
                        onClick={e => {
                            console.log('New Pin');
                            console.log(e);
                            this.setState({
                                locations: [{
                                    address: 'New Pin',
                                    lat: e.lat,
                                    lng: e.lng,
                                }]
                            });
                            return <MapPopup/>;
                        } }
                        bootstrapURLKeys={{ key: '' }}
                        defaultCenter={location}
                        defaultZoom={defaultProps.zoom}>
                        {this.state.locations.map(function(object, i){
                            return <LocationPin
                                key={i}
                                lat={object.lat}
                                lng={object.lng}
                                text={object.address}
                            />;
                            
                        })}
                        
                    </GoogleMapReact>
                    
                </div>

               
            </div>
        
        );
    }}
export default Home;