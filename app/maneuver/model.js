import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    minScore: DS.attr('number', {defaultValue: 0}),
    maxScore: DS.attr('number', {defaultValue: 10}),
    maneuverset: DS.belongsTo('maneuverset')

});
