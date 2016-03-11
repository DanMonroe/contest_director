import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    maneuversets: DS.hasMany('maneuverset', {async:true}),
    aircrafttype: DS.belongsTo('aircrafttype')
});
