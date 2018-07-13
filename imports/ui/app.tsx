// Client entry point, imports all client code

import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import { Home } from '../ui/Home';
import GoogleApiWrapper from '../ui/Map';
import { About } from '../ui/About';

// Set up all routes in the app
const App = () => (
    <div>
        <nav className='navigation'>
            <Link to='/' >Home</Link>
            <Link to='/map' >Map</Link>
            <Link to='/about' >About</Link>
        </nav>
        <div id='contentWrapper'>
            <Route exact path='/' component={Home} />
            <Route exact path='/map' component={GoogleApiWrapper} />
            <Route exact path='/about' component={About} />

        </div>
    </div>
)


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('render-target')
);

