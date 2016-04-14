import { Model, belongsTo } from 'ember-cli-mirage';
import DS from 'ember-data';

export default Model.extend({
    pilot: belongsTo(),
    contest: belongsTo(),
    pilotclass: belongsTo()
});
