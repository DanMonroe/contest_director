import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return Ember.RSVP.hash({
            contest: this.store.peekRecord('contest', params.contest_id ),
            pilots: this.store.peekAll('pilot'),
            contestregistrations: this.store.query('contestregistration', {filter: {contestId: params.contest_id}})
        });
    }
});
