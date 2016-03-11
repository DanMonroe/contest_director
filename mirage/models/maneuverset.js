import { Model, belongsTo, hasMany } from 'ember-cli-mirage';
import DS from 'ember-data';

export default Model.extend({
    maneuvers: hasMany(),
    pilotclass: belongsTo()
});
