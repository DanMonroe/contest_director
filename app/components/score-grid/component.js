import Ember from 'ember';

export default Ember.Component.extend({
    maneuvers: null,
    round: null,
    //roundscore: null,

    totalScoreList: Ember.computed.mapBy('maneuverscores', 'totalScore'),

    totalRoundScoreFromManeuvers: Ember.computed.sum('totalScoreList'),

//    totalScore: Ember.computed('totalRoundScoreFromManeuvers', function() {
//console.log('in test');
//        //debugger;
//        let totalScore = this.get("totalRoundScoreFromManeuvers");
//        this.set("roundscore.firstObject.totalRoundScore", totalScore);
//        return totalScore;
//    })
});
