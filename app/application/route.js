import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function () {
        var request = {
            contests: this.store.findAll('contest'),
            aircrafttypes: this.store.findAll('aircrafttype'),
            pilotclasses: this.store.findAll('pilotclass'),
            maneuversets: this.store.findAll('maneuverset'),
            maneuvers: this.store.findAll('maneuver'),
            //registrations: this.store.findAll('registration'),
            rounds: this.store.findAll('round')
            //,
            //roundscores: this.store.findAll('roundscore'),
            //users: this.store.findAll('user')

        };

        return Ember.RSVP.hash(request);
    },

    actions: {
        transitionTo(route) {
            this.transitionTo(route);
        }
    }

});
