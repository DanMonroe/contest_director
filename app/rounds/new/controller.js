import Ember from 'ember';

let { Controller, get, inject } = Ember;

export default Controller.extend({

    store: inject.service("store"),

    actions: {
        saveNewRound(params) {
            console.log('in saveNewRound controller');
            console.log(params);

            let newRound = get(this, "store").createRecord('round', {
                name: params.name,
                numjudges: params.numjudges,
                drophigh: params.drophigh,
                droplow: params.droplow,
                maneuverset: params.selectedManeuverset,
                contest: params.contest,
                pilotclass: params.pilotclass
            });
            
            newRound.save().then(() => {
                this.transitionToRoute("contest", params.contest.id)
            });

        },
        cancelNewRound(params) {
            this.transitionToRoute("contest", params.contest_id)
        }
    }
});
