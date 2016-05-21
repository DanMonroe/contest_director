import DS from 'ember-data';

export default DS.Model.extend({
    contestregistration: DS.belongsTo('contestregistration', { async: false }),
    round: DS.belongsTo('round', { async: false }),
    maneuver: DS.belongsTo('maneuver', { async: false }),
    roundscore: DS.belongsTo('roundscore', { async: false }),

    scores: DS.hasMany('score', { async: false }),

    totalScore: DS.attr('number', {defaultValue:0})
});
