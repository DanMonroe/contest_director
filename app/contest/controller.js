import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createNewRound(params) {
            console.log('in createNewRound controller');
            this.transitionToRoute("rounds.new", params.contest_id, params.pilotclass_id);
        }
    }
});
