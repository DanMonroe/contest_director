import Ember from 'ember';
import DS from 'ember-data';

let { computed } = Ember;

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),

    fullName: computed('firstName', 'lastName', {
        get() {
            return this.get('firstName') + ' ' + this.get('lastName');
        }
    })
});
