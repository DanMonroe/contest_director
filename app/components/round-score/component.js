import Ember from 'ember';
import Judge from '../../objects/judge';

const { computed, Component, A : emberA } = Ember;

export default Component.extend({
    round: null,
    maneuverscores:null,
    roundscore: null,

    judges: computed('round.numjudges', function () {
        let judgeList = emberA();
        let numJudges = this.get('round.numjudges');
        for(var i = 1; i <= numJudges; i++) {
            judgeList.pushObject(Judge.create({name: i}));
        }

        return judgeList;
    })
});
