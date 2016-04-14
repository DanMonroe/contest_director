import DS from 'ember-data';
import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
    name: DS.attr('string'),
    aircrafttype: belongsTo(),
    registrations: hasMany()
});
