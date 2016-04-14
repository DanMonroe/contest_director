import Ember from 'ember';

let { computed, Component, inject } = Ember;

export default Component.extend({

    store: inject.service(),

    contest: null,

    filteredPilotClasses: computed('contest.aircrafttype', function() {
        return this.get("store").query('pilotclass', {filter: {aircrafttypeId: this.get("contest.aircrafttype.id")}});
    })

});
