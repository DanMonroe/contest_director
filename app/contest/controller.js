import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {

        registerPilot(params){
            var newRegistration = this.get("store").createRecord('contestregistration', {
                contest: params.contest,
                pilot: params.pilot,
                pilotname: params.pilot.get('fullName'),
                pilotclass: params.pilotclass
            });

            return newRegistration.save();
        },

        createNewRound(params) {
            this.transitionToRoute("rounds.new", params.contest_id, params.pilotclass_id);
        }
    }
});
