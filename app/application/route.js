import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function () {
        var request = {
            contests: this.store.findAll('contest'),
            aircrafttypes: this.store.findAll('aircrafttype'),

            //pilotclasses: this.store.findAll('pilotclass'),
            //maneuversets: this.store.findAll('maneuverset'),
            //maneuvers: this.store.findAll('maneuver'),
            //registrations: this.store.findAll('registration'),
            //rounds: this.store.findAll('round'),
            //maneuverscores: this.store.findAll('maneuverscore'),
            //roundscores: this.store.findAll('roundscore'),


            //scores: this.store.findAll('score'),

            pilots: this.store.findAll('pilot')

        };

        return Ember.RSVP.hash(request);
    }

});
