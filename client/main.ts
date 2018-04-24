// Client entry point, imports all client code

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';
import '/imports/startup/client';
import '/imports/startup/both';


Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});