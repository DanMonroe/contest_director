import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;

export default DS.Model.extend({
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    amanumber: DS.attr('string'),

    fullName: computed('firstname', 'lastname', {
        get() {
            return this.get('firstname') + ' ' + this.get('lastname');
        }
    })
});
