import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({

    actions: {
        clickLogin() {
            this.transitionToRoute('auth.login');
        },

        clickRegistration() {
            this.transitionToRoute('auth.register');
        }

    }
});
