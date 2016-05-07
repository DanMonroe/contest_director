import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    registration: DS.belongsTo('registration', { async: false }),
    round: DS.belongsTo('round', { async: false }),
    maneuverscores: DS.hasMany('maneuverscore', { async: false }),

    totalRoundScore: DS.attr('number', {defaultValue:0}),

    normalizedScore: DS.attr('number', {defaultValue:0})

    //normalizedScore: Ember.computed(function(/*highScore*/) {
    //    let highScore = 35;
    //
    //    if(highScore === 0) {
    //        return 0;
    //    }
    //    let normScore = (this.get('totalRoundScore') / highScore) * 1000;
    //
    //    if(Number.isSafeInteger(normScore)) {
    //        return normScore;
    //    }
    //    return Number(normScore).toPrecision(6);
    //})
});
