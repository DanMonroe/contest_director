import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({

    session: inject.service(),

    adminExpanded: true,

    actions: {
        clickLogin() {
            this.transitionToRoute('auth.login');
        },

        clickRegistration() {
            this.transitionToRoute('auth.register');
        },

        clickSignout() {
            this.get('session').invalidate();
        },


        toggleAdminExpanded() {
            this.toggleProperty('adminExpanded');
        }


    }
});
