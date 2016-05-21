import DS from 'ember-data';
import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
    name: DS.attr('string'),
    //aircrafttypeId: DS.attr('number'),
    aircrafttype: belongsTo(),
    contestregistration: hasMany()
});
