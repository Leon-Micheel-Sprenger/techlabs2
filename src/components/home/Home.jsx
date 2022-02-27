import React from 'react'

import './home.css'
import {Icon} from "@iconify/react/dist/iconify";
import locationIcon from "@iconify/icons-mdi/map-marker";

import GoogleMapReact from "google-map-react";
import MapPopup from "../dialog/LocationDialog";
import LocationDialog from "../dialog/LocationDialog";
import Footer from "../footer/Footer";
import Offcanvas from 'react';
import Button from 'react';
import useState from 'react';
import render from 'react';
import Marker from '../home/Marker'
import {useLocalStorage} from '../dialog/GetStorage'

const LocationPin = ({ text }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
)

const Cord = () => {
  const [name, setName] = useLocalStorage("coordinates", "");
};


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {locations: [{
                address: 'Initial Pin',
                lat: 52.49632997574632,
                lng: 13.437847871710412,
            }]};
    }
    renderPolylines (map, maps) {
       /** Example of rendering geodesic polyline */

       /** Example of rendering non geodesic polyline (straight line) */
       let nonGeodesicPolyline = new maps.Polyline({
         path: this.props.markers,
         geodesic: false,
         strokeColor: '#e4e4e4',
         strokeOpacity: 0.7,
         strokeWeight: 3
       })
       nonGeodesicPolyline.setMap(map)

       this.fitBounds(map, maps)
     }

     fitBounds (map, maps) {
       var bounds = new maps.LatLngBounds()
       for (let marker of this.props.markers) {
         bounds.extend(
           new maps.LatLng(marker.lat, marker.lng)
         )
       }
       map.fitBounds(bounds)
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
                        bootstrapURLKeys={{ key:''}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        onGoogleApiLoaded={({map, maps}) => this.renderPolylines(map, maps)}>
                        {this.state.locations.map(function(object, i){
                            return <LocationPin
                                key={i}
                                lat={object.lat}
                                lng={object.lng}
                                text={object.address}
                            />;
                        })}
                        <Marker text={'DUB'} lat={53.42728} lng={-6.24357} />
                        <Marker text={'YYZ'} lat={43.681583} lng={-79.61146} />
                    </GoogleMapReact>

                </div>

    <Footer/>
            </div>

        );
  }
}

Home.defaultProps = {
  markers: [{lat: 53.42728, lng: -6.24357},
    {lat: 43.681583, lng: -79.61146}],
  center: [52.49632997574632, 13.437847871710412],
  zoom: 13
};

export default Home;
