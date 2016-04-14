import Ember from 'ember';

let { computed, inject} = Ember;

export default Ember.Component.extend({

    store: inject.service(),

    contest: null,

    pilotclass: null,

    filteredRegistrations: computed('contest.id', 'pilotclass.id', function () {
        return this.get("store").query('registration', {
            filter: {
                contestId: this.get("contest.id"),
                pilotclassId: this.get("pilotclass.id")
            }
        });
    })
});
