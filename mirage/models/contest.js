import DS from 'ember-data';
import { Model } from 'ember-cli-mirage';

export default Model.extend({
    name: DS.attr('string')
});
