import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {

        return Ember.RSVP.hash({
            contest: this.store.peekRecord('contest', params.contest_id ),
            pilotclass: this.store.peekRecord('pilotclass', params.pilotclass_id ),

            //round: this.store.peekRecord('round', params.round_id ),
            round: this.store.query('round', {
                filter: {
                    roundId: params.round_id,
                }
            }),
            registeredpilots: this.store.query('contestregistration', {
                filter: {
                    contestId: params.contest_id,
                    pilotclassId: params.pilotclass_id
                }
            })
        });
    }

});
