import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            aircrafttypes: this.store.peekAll('aircrafttype'),
            pilotclasses: this.store.peekAll('pilotclass'),
            maneuversets: this.store.peekAll('maneuverset'),
            maneuvers: this.store.peekAll('maneuver')
        });
    }

});
