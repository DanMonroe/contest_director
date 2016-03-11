import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    maneuvers: DS.hasMany('maneuver', {async:true}),
    pilotclass: DS.belongsTo('pilotclass')
});
