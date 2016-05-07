import Ember from 'ember';

let { Component, computed, get, isPresent } = Ember;

export default Component.extend({
    roundscores: null,

    scoresSortingDesc: ['totalRoundScore:desc'],
    sortedScores: computed.sort('roundscores', 'scoresSortingDesc'),

    highScore: computed('sortedScores', function() {
        if(isPresent(get(this, 'sortedScores'))) {
            return get(this, 'sortedScores.firstObject.totalRoundScore');
        }
        return 0;
    })
});
