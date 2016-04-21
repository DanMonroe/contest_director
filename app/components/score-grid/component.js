import Ember from 'ember';

export default Ember.Component.extend({
    maneuvers: null,
    round: null,

    //TODO - When manever-score is a real model do this: totalScoreList: Ember.computed.mapBy('maneuvers', 'totalScore'),
    totalScoreList: Ember.computed.mapBy('maneuverscores', 'totalScore'),

    //totalScoreList: Ember.computed.map('maneuverscores', function(maneuverscore, index) {
    //    debugger;
    //    return 1;
    //}),

    totalRoundScore: Ember.computed.sum('totalScoreList')
});
