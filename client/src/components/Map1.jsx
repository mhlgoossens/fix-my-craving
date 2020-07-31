// import React, { Component } from 'react';
// const google = window.google;

// // surinameplein https://gps-coordinates.org/my-location.php
// const currentLocation = {
//   lat: 52.3577442,
//   lng: 4.853146,
// }

// const apiKey = process.env.REACT_APP_API_KEY;
// const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Space+Needle,Seattle+WA`;
// const contextUrl = `https://maps.googleapis.com/maps/api/js?
// libraries=localContext&
// v=beta&
// key=${process.env.REACT_APP_API_KEY}&
// callback=initMap`

// class API extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       place: '',
//     };
//   }

//   componentDidMount() {
//     this.getPlace();
//     this.initMap();
//   }

//   getPlace() {
//     fetch('/getPlace')
//       .then((res) => res.text())
//       .then((res) => this.setState({ place: res }));
//   }

//   // Instantiate LocalContextMapView.
//   initMap() {
//     /* eslint-disable no-undef */
//     const localContextMapView = new google.maps.localContext.LocalContextMapView({
//       element: document.querySelector('#map'),
//       placeTypePreferences: ['restaurant'],
//       maxPlaceCount: 12,
//     });

//     // Set inner map options.
//     localContextMapView.map.setOptions({
//       center: {lat: 47.6532809, lng: -122.3512206},
//       zoom: 8
//     });
//   }

//   render() {
//     const { place } = this.state;
//     return (
//       <div className="API">
//         <script src={contextUrl}
//           defer>
//         </script>
//         <div className="coordinates">
//           Hardcoded coordinates: {currentLocation.lat}, {currentLocation.lng}
//         </div>

//         <div className="place">
//           {place}
//         </div>

//         <div id="map">

//         </div>

//         {/* <div className="map">
//           <iframe
//             width="600"
//             height="450"
//             frameBorder="0"
//             src={mapSrc} >
//           </iframe>
//         </div> */}
//       </div>
//     );
//   }
// }

// export default API;
// // https://www.google.com/maps/embed/v1/place?key=AIzaSyByysZBUczIf9flaHJRkU8rfdcfVY7CP74&q=Space+Needle,Seattle+WA
