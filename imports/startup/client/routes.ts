const router = require('react-router');

// Import needed templates
import '../../ui/layouts/body/body.ts';
import '../../ui/pages/home/home.ts';
import '../../ui/pages/not-found/not-found.ts';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
