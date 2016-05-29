import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {

        return Ember.RSVP.hash({
            round: this.store.findRecord('round', params.round_id),

            contest: this.store.peekRecord('contest', params.contest_id),

            pilotclass: this.store.peekRecord('pilotclass', params.pilotclass_id),

            contestregistration: this.store.findRecord('contestregistration', params.contestregistration_id),

            roundscore: this.store.queryRecord('roundscore',
                {
                    filter: {
                        contestregistrationId: params.contestregistration_id,
                        roundId: params.round_id
                    }
                }
            ),
            maneuverscores: this.store.query('maneuverscore',
                {
                    filter: {
                        contestregistrationId: params.contestregistration_id,
                        roundId: params.round_id
                    }
                }
            )
        });
    }

});
