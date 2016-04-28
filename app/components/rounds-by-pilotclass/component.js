import Ember from 'ember';

let { inject, computed } = Ember;

export default Ember.Component.extend({

    store: inject.service(),

    contest: null,

    pilotclass: null,

    showRounds: false,
    showNewRound: false,

    filteredRounds: computed('contest.id', 'pilotclass.id', function () {
        return this.get("store").query('round', {
            filter: {
                contestId: this.get("contest.id"),
                pilotclassId: this.get("pilotclass.id")
            }
        });
    }),

    actions: {
        toggleRoundView() {
            this.toggleProperty('showRounds');
        },

        toggleNewRound(round) {
            console.log("toggle new round")
            this.toggleProperty('showNewRound');

        }
    }

});
