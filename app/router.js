import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function () {
  this.route('contest', {path: '/contest/:contest_id'}, function () {
    this.route('registration', {
        path: '/pilotclass/:pilotclass_id/contestregistration'
    });

    //this.route('round', {path: '/pilotclass/:pilotclass_id/round/:round_id'}, function () {
    //});
  });

  this.route('rounds', {path: '/contest/:contest_id/pilotclass/:pilotclass_id/rounds'}, function () {
    this.route('new', {path: '/new'}, function () {
    });
    this.route('results', {path: '/:round_id/results'}, function () {
    });
  });

  this.route('round', {path: '/contest/:contest_id/pilotclass/:pilotclass_id/round/:round_id'}, function () {
  });

  //this.route('round');
  this.route('pilotscores', {path: '/contest/:contest_id/pilotclass/:pilotclass_id/round/:round_id/pilotscore/:contestregistration_id'}, function () {

  });


  this.route('auth', function() {
    this.route('login');
    this.route('register');
  });
  this.route('admin', function() {
    this.route('setup', function() {
      this.route('aircrafttypes');
      this.route('pilotclasses');
      this.route('maneuversets');
      this.route('maneuvers');
      this.route('pilots');
    });
  });
});

export default Router;
