import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),

    fullName: Ember.computed('firstName', 'lastName', {
        get() {
            return this.get('firstName') + ' ' + this.get('lastName');
        }
    })
});
