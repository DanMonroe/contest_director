import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    registration: DS.belongsTo('registration', { async: false }),
    round: DS.belongsTo('round', { async: false }),
    maneuverscores: DS.hasMany('maneuverscore', { async: false }),

    totalRoundScore: DS.attr('number', {defaultValue:0})
});
