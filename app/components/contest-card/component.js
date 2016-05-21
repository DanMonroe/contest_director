import Ember from 'ember';

const { computed, Component, get, inject, isPresent } = Ember;

export default Component.extend({

    store: inject.service(),

    contest: null,

    isRegistering: false,

    selectedPilotClass: null,
    selectedPilot: null,

    selectPilotLabelCallback(item) {
        return item.get('fullName');
    },

    selectLabelCallback(item) {
        return item.get('name');
    },


    filteredPilotClasses: computed('contest.aircrafttype', function() {
        return this.get("store").query('pilotclass', {filter: {aircrafttypeId: this.get("contest.aircrafttypeId")}});
    }),


    actions: {
        toggleRegistration() {
            this.toggleProperty("isRegistering");
        },

        saveRegistration() {
            let pilot = get(this, "selectedPilot");
            let pilotclass = get(this, "selectedPilotClass");
            let thisContest = this.get("contest");

            if (isPresent(pilot) && isPresent(pilotclass)) {
                var newRegistration = this.get("store").createRecord('contestregistration', {
                    contest: thisContest,
                    pilot: pilot,
                    pilotname: pilot.get('fullName'),
                    pilotclass: pilotclass
                });

                newRegistration.save().then(() => {
                    this.set("selectedPilot", null);
                    this.toggleProperty("isRegistering");
                });

            }


            //this.toggleProperty("isRegistering");
        }
    }
});
