import * as React from 'react';
import * as ReactDOM from 'react-dom';

const googleMapsClient = require('@google/maps').createClient({
    key: Meteor.settings.public.googleMapsAPIKey,
    Promise: 'Promise'
});

export const Map = () => <div className='content'>
    <div id="map"></div>
</div>;

