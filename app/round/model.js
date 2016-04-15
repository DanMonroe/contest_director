import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    contest: DS.belongsTo('contest', { async: true }),
    pilotclass: DS.belongsTo('pilotclass', { async: true })
});
