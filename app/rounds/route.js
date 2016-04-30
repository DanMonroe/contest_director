import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return Ember.RSVP.hash({
            contest: this.store.peekRecord('contest', params.contest_id ),
            pilotclass: this.store.peekRecord('pilotclass', params.pilotclass_id ),
            //registeredpilots: this.store.query('registration', {
            //    filter: {
            //        contestId: params.contest_id,
            //        pilotclassId: params.pilotclass_id
            //    }
            //}),
            rounds: this.store.query('round', {
                filter: {
                    contestId: params.contest_id,
                    pilotclassId: params.pilotclass_id
                }
            }),
            maneuversets: this.store.query('maneuverset', {
                filter: {
                    pilotclassId: params.pilotclass_id
                }
            })
        });
    }


});
