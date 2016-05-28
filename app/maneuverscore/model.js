import DS from 'ember-data';

export default DS.Model.extend({
    // 5/22/16 TODO do I need this reference?  contestregistration: DS.belongsTo('contestregistration', { async: false }),
    // 5/22/16 TODO do I need this reference?  round: DS.belongsTo('round', { async: false }),
    maneuver: DS.belongsTo('maneuver', { async: false }),
    roundscore: DS.belongsTo('roundscore', { async: false }),

    scores: DS.hasMany('score', { async: false }),

    totalScore: DS.attr('number', {defaultValue:0})
});
