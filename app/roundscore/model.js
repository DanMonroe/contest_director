import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    contestregistration: DS.belongsTo('contestregistration', { async: false }),
    round: DS.belongsTo('round', { async: false }),
    maneuverscores: DS.hasMany('maneuverscore', { async: false }),

    totalroundscore: DS.attr('number', {defaultValue:0}),

    normalizedscore: DS.attr('number', {defaultValue:0})

    //normalizedscore: Ember.computed(function(/*highScore*/) {
    //    let highScore = 35;
    //
    //    if(highScore === 0) {
    //        return 0;
    //    }
    //    let normScore = (this.get('totalroundscore') / highScore) * 1000;
    //
    //    if(Number.isSafeInteger(normScore)) {
    //        return normScore;
    //    }
    //    return Number(normScore).toPrecision(6);
    //})
});
