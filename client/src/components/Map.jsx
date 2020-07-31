import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

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
  document.title = "Single day project"
  navigator.geolocation.getCurrentPosition(success => { 
    console.log('lat: ', success.coords.latitude);
    console.log('lng: ', success.coords.longitude);
    return this.setState({ lat: success.coords.latitude, lng: success.coords.longitude })}, 
    error, 
    options
  );
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
      <LocationPin
          lat={52.3627849}
          lng={4.851146}
          text={'Restaurant 1'}
      />
      <LocationPin
          lat={52.3515849}
          lng={4.851146}
          text={'Restaurant 2'}
      />
      <LocationPin
          lat={52.3567849}
          lng={4.861146}
          text={'Restaurant 3'}
      />
      </GoogleMapReact>
    </div>
    </div>
  
  )
}
}

export { Map, LocationPin };
