import * as React from 'react';
import * as ReactDOM from 'react-dom';

const googleMapsClient = require('@google/maps').createClient({
    key: Meteor.settings.public.googleMapsAPIKey,
    Promise: 'Promise'
});

var map;

function initMap() {
    map = new googleMapsClient.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}

export const Map = () => <div className='content'>
    <div id="map"></div>
</div>;
//TODO: :-)
// class Map extends React.Component {
//     constructor() {
//       super();

//       this.panToArcDeTriomphe = this.panToArcDeTriomphe.bind(this);
//     }
//     componentDidMount() {   
//       let self = this;
//       loadScript("https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyByH0c5bxYDZ48BLQ401BBsm4DppG6QNkQ", function() {
//         console.log('ready to render', self);
//         self.map = new google.maps.Map(self.refs.map, { center: {lat:48.858608, lng:2.294471},  zoom: 16 });
//       });
//       //this.map = new google.maps.Map(this.refs.map, { center: {lat:48.858608, lng:2.294471},  zoom: 16 });
//     }
//     panToArcDeTriomphe() {
//       console.log(this)
//       this.map.panTo({ lat:48.873947, lng:2.295038});
//     }
//     render() {
//       const mapStyle = {width:500, height:300,  border:'1px solid black' };    
//       return (
//         <div>
//           <button onClick={this.panToArcDeTriomphe}>Go to Arc</button>
//           <div ref="map" style={mapStyle}>I should be a map!</div>
//         </div>
//       );
//     }
//   }


//     ReactDOM.render(<Map />, document.getElementById('root'));

//   function loadScript(url, callback)
//   {
//       // Adding the script tag to the head as suggested before
//       var head = document.getElementsByTagName('head')[0];
//       var script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.src = url;

//       // Then bind the event to the callback function.
//       // There are several events for cross browser compatibility.
//       script.onreadystatechange = callback;
//       script.onload = callback;

//       // Fire the loading
//       head.appendChild(script);
//   }