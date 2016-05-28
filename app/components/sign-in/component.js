import Ember from 'ember';

const { Component, get, inject } = Ember;

export default Component.extend({

    session: inject.service(),

    actions: {

        clickLogin() {
            get(this, "clickLogin")();
        },

        clickRegistration() {
            get(this, "clickRegistration")();
        },

        clickSignout() {
            get(this, "clickSignout")();
        }



    }

});
