import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({

    session: inject.service(),

    actions: {
        clickLogin() {
            this.attrs.clickLogin();
        },

        clickRegistration() {
            this.attrs.clickRegistration();
        },

        clickSignout() {
            this.attrs.clickSignout();
            //this.get('session').invalidate();
        }

    }
});
