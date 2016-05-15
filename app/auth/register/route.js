import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        doRegister() {
            this.get('currentModel').save().then(() => {
                    //this.get('flashMessages').success('Registered! Please login now');
                    console.log('Registered! Please login now');

                    this.transitionTo('auth.login');
                }).catch((resp) => {

                    // Error(s) while saving
                    const { errors } = resp;
                    //this.get('flashMessages').danger(errors.mapBy('detail').join(', '));
                    console.log(errors.mapBy('detail').join(', '));
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
