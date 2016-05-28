import Ember from 'ember';

const { computed, Component, get, set, inject, isPresent } = Ember;

export default Component.extend({

    store: inject.service(),

    contest: null,
    rounds: null,

    isRegistering: false,

    selectedPilotClass: null,
    selectedPilot: null,

    selectPilotLabelCallback(item) {
        return get(item, 'fullName');
    },

    selectLabelCallback(item) {
        return get(item, 'name');
    },


    filteredPilotClasses: computed('contest.aircrafttype', function() {
        return get(this, "store").query('pilotclass', {filter: {aircrafttypeId: get(this, "contest.aircrafttypeId")}});
    }),

    totalRegistrations: computed("contestregistrations.[]", function() {
        return get(this, "contestregistrations.length");
    }),

    actions: {
        toggleRegistration() {
            this.toggleProperty("isRegistering");
        },

        saveRegistration() {
            let params = {
                pilot: get(this, "selectedPilot"),
                pilotclass: get(this, "selectedPilotClass"),
                contest: get(this, "contest")
            };

            if (isPresent(params.pilot) && isPresent(params.pilotclass)) {
                const promise = get(this, 'onRegisterPilot')(params);
                promise.then(() => {
                    set(this, "selectedPilot", null);
                    this.toggleProperty("isRegistering");
                });
            }
        }
    }
});
