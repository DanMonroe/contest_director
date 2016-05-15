import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        doRegister() {
            this.get('currentModel').save()
                .then(() => {
                    this.transitionTo('auth.login');
                });
        },

        closeRegister() {
            this.transitionTo('index');
        },

        onCancel() {
            this.transitionTo('index');
        }

    },

    model() {
        return this.store.createRecord('user');
    }

});
