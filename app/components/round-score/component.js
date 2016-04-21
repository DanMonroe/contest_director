import Ember from 'ember';
import Judge from '../../objects/judge';

let { computed, Component, A : emberA } = Ember;

export default Component.extend({
    round: null,

    judges: computed('round.numjudges', function () {
        let judgeList = emberA();
        let numJudges = this.get('round.numjudges');
        for(var i = 1; i <= numJudges; i++) {
            judgeList.pushObject(Judge.create({name: 'Judge ' + i}));
        }

        return judgeList;
    })
});
