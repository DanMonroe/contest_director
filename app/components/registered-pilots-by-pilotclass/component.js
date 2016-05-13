import Ember from 'ember';

const { computed, inject} = Ember;

export default Ember.Component.extend({

    store: inject.service(),

    contest: null,

    pilotclass: null,

    showRegistrations: false,

    filteredRegistrations: computed('contest.id', 'pilotclass.id', function () {
        return this.get("store").query('registration', {
            filter: {
                contestId: this.get("contest.id"),
                pilotclassId: this.get("pilotclass.id")
            }
        });
    }),

    actions: {
        toggleRegistrationView() {
            this.toggleProperty('showRegistrations');
        }
    }

});
