import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        //console.log(params);

        return Ember.RSVP.hash({
            contest: this.store.peekRecord('contest', params.contest_id ),
            pilotclass: this.store.peekRecord('pilotclass', params.pilotclass_id ),
            round: this.store.peekRecord('round', params.round_id ),
            registration: this.store.peekRecord('registration', params.registration_id ),
            maneuverscores: this.store.findAll('maneuverscore', { registration_id: params.registration_id })
        });
    }

});
