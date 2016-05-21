import Ember from 'ember';

const { computed, get, inject} = Ember;

export default Ember.Component.extend({

    store: inject.service(),

    contest: null,

    pilotclass: null,

    showRegistrations: true,

    filteredRegistrations: computed.filter('contestregistrations', function(registration) {
        return get(registration, 'pilotclass.id') === get(this, 'pilotclass.id');
    }),

    actions: {
        toggleRegistrationView() {
            this.toggleProperty('showRegistrations');
        }
    }

});
