import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function () {
  this.route('contest', {path: '/contest/:contest_id'}, function () {
    this.route('registration', {
        path: '/pilotclass/:pilotclass_id/registration'
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
  this.route('maneuversets');
  this.route('maneuvers', {path: '/maneuverset/:maneuverset_id/maneuvers'});
  this.route('pilotscores', {path: '/contest/:contest_id/pilotclass/:pilotclass_id/round/:round_id/pilotscore/:registration_id'}, function () {

  });


  this.route('pilots');
  this.route('aircrafttypes');

  this.route('auth', function() {
    this.route('login');
    this.route('register');
  });
  this.route('admin', function() {});
});

export default Router;
