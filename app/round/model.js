import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    contest: DS.belongsTo('contest', { async: true }),
    pilotclass: DS.belongsTo('pilotclass', { async: true }),

    maneuverset: DS.belongsTo('maneuverset', { async: false }),
    maneuverscores: DS.hasMany('maneuverscore', { async: false }),
    numjudges: DS.attr('number'),
    drophigh: DS.attr('number'),
    droplow: DS.attr('number')
});
