import DS from 'ember-data';

export default DS.Model.extend({
    maneuverscore: DS.belongsTo('maneuverscore', { async: false }),
    points: DS.attr('number')
});
