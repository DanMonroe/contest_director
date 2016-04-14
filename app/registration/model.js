import DS from 'ember-data';

export default DS.Model.extend({
    pilot: DS.belongsTo('pilot', { async: true }),
    contest: DS.belongsTo('contest', { async: true }),
    pilotclass: DS.belongsTo('pilotclass', { async: true })
});
