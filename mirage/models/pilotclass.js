import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
    maneuversets: hasMany(),
    aircrafttype: belongsTo()
});
