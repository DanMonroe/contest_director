import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return Ember.RSVP.hash({
            contest: this.store.peekRecord('contest', params.contest_id ),

        });
    }
});
