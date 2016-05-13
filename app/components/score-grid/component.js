import Ember from 'ember';

const { Component, computed, get, inject, isPresent } = Ember;

export default Component.extend({

    store: inject.service(),

    maneuvers: null,
    round: null,
    roundscore: null,

    totalScoreList: computed.mapBy('maneuverscores', 'totalScore'),

    //totalRoundScoreFromManeuvers: computed.sum('totalScoreList')
    totalRoundScoreFromManeuvers: computed('totalScoreList', function() {

        let roundScore = 0;
        get(this, 'totalScoreList').forEach((score) => {
            roundScore += +score;
        });

        if(isPresent(get(this, 'roundscore'))) {
            this.set('roundscore.totalRoundScore', roundScore);
            get(this, 'roundscore').save();
        }

        this.updateNormalizedScores();

        return roundScore;
    }),

    updateNormalizedScores() {
        let allRoundScores;
        let roundId = get(this, 'round.id');
        get(this, 'store')
            .query('roundscore', {filter: {roundId: roundId}})
            .then((rounds) => {
                console.log('rounds:');
                console.log(rounds);

                let maxScore = Math.max(...rounds.content.mapBy('_data.totalRoundScore'));

                rounds.forEach((thisRound) => {
                    //debugger;
                    let normalizedScore = this.normalizeScore(thisRound.get('totalRoundScore'), maxScore);
                    thisRound.set('normalizedScore', normalizedScore);
                    thisRound.save();
                });

            });
    },

    normalizeScore(thisScore, highScore){
        //debugger;
        if(highScore === 0) {
            return 0;
        }
        let normScore = (thisScore / highScore) * 1000;

        if(Number.isSafeInteger(normScore)) {
            return normScore;
        }
        return Number(normScore).toPrecision(6);
    }

});
