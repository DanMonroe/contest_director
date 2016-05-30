import Ember from 'ember';
import Judge from '../../objects/judge';

const { computed, Component, A : emberA, get, inject } = Ember;

export default Component.extend({

    store: inject.service("store"),

    round: null,

    contestregistration: null,

    roundscore: null,

    //roundscore: computed("round", function() {
    //
    //    let roundScores = get(this,"store").queryRecord('roundscore',
    //        {
    //            filter: {
    //                contestregistrationId: get(this, "contestregistration.id"),
    //                roundId: get(this, "round.id")
    //            }
    //        }).then(function(result) {
    //            return result;
    //        });
    //}),
    //
    maneuverscores: computed("roundscore.id", function() {

        let manScores = get(this,"store").query('maneuverscore',
            {
                filter: {
                    roundscoreId: get(this, "roundscore.id")
                }
            //}).then(function(result) {
            //    return result;
            });
        return manScores;
    }),

    judges: computed('round.numjudges', function () {
        let judgeList = emberA();
        let numJudges = get(this, 'round.numjudges');
        for(var i = 1; i <= numJudges; i++) {
            judgeList.pushObject(Judge.create({name: i}));
        }

        return judgeList;
    })
});
