import Ember from 'ember';

const { Component, computed, get, isPresent } = Ember;

export default Component.extend({
    roundscores: null,

    scoresSortingDesc: ['totalroundscore:desc'],
    sortedScores: computed.sort('roundscores', 'scoresSortingDesc'),

    highScore: computed('sortedScores', function() {
        if(isPresent(get(this, 'sortedScores'))) {
            return get(this, 'sortedScores.firstObject.totalroundscore');
        }
        return 0;
    })
});
