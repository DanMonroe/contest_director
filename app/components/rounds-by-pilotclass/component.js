import Ember from 'ember';

const { inject, computed } = Ember;

export default Ember.Component.extend({

    store: inject.service(),

    contest: null,

    pilotclass: null,

    //showRounds: false,
    //showNewRound: false,

    filteredRounds: computed('contest.id', 'pilotclass.id', function () {
        return this.get("store").query('round', {
            filter: {
                contestId: this.get("contest.id"),
                pilotclassId: this.get("pilotclass.id")
            }
        });
    }),

    actions: {
        clickedNewRound(contest_id, pilotclass_id) {
            let params = {
                contest_id: contest_id,
                pilotclass_id: pilotclass_id
            };
            this.get('onCreateRound')(params);
        }
    }

});
