import DS from 'ember-data';
import Model from 'ember-data/model';

export default Model.extend({
    pilotname: DS.attr("string"),
    pilot: DS.belongsTo('pilot', { async: true }),
    contest: DS.belongsTo('contest', { async: true }),
    pilotclass: DS.belongsTo('pilotclass', { async: true }),
    roundscores: DS.hasMany('roundscore', { async: false })
});
