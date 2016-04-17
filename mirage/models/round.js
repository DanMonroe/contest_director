import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
    contest: belongsTo(),
    pilotclass: belongsTo(),
    maneuverset: belongsTo(),
    maneuverscores: hasMany()
});
