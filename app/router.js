import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contest', { path: '/contest/:contest_id' }, function() {
    this.route('registration', {
      path: '/pilotclass/:pilotclass_id/registration'
    });

    this.route('rounds', {
      path: '/pilotclass/:pilotclass_id/rounds'
    });
  });
  this.route('maneuversets');
});

export default Router;
