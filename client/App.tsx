// Client entry point, imports all client code

import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <h1>Hallo Wereld!</h1>
        )
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('render-target'));
});