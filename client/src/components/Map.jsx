import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
)

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 48.859973,
            lng: 2.345549,
            zoomLevel: 15,
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(success => { 
            console.log('lat: ', success.coords.latitude);
            console.log('lng: ', success.coords.longitude);
            return this.setState({ lat: success.coords.latitude, lng: success.coords.longitude })}, error, options);
    }

    render() {
        const { lat } = this.state;
        const { lng } = this.state;
        const { zoomLevel } = this.state;
        return (
            <div className="map">
            <h2 className="map-h2">Fix your craving</h2>
        
            <div className="google-map">
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                center={ {lat, lng} }
                defaultZoom={zoomLevel}
                >
                <LocationPin
                    lat={lat}
                    lng={lng}
                    text={''}
                />
                {/* <LocationPin
                    lat={52.3527849}
                    lng={4.851146}
                    text={'ADD PIN'}
                />                 */}
                </GoogleMapReact>
            </div>
            </div>
        
        )
    }
}
// const Map = ({ zoomLevel }) => (
//     <div className="map">
//     <h2 className="map-h2">Hackday project</h2>

//     <div className="google-map">
//         <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
//         defaultCenter={location}
//         defaultZoom={zoomLevel}
//         >
//         <LocationPin
//             lat={location.lat}
//             lng={location.lng}
//             text={location.address}
//         />
//         </GoogleMapReact>
//     </div>
//     </div>
// );

export { Map, LocationPin };

