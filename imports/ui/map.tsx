import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Map, InfoWindow, Market, GoogleApiWrapper } from 'google-maps-react';

//TODO:
export class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: Meteor.settings.public.googleMapsAPIKey
})(MapContainer);
