import Ember from 'ember';

const { Component, computed, get, inject } = Ember;

export default Component.extend({

    session: inject.service(),

    //isLoggedIn: computed(function() {
    //    let loggedIn = this.get('session').get('isAuthenticated');
    //
    //    console.log('Logged in: ' + loggedIn);
    //
    //    return loggedIn;
    //}),

    //beforeModel() {
    //    if(!this.get('session').get('isAuthenticated')) {
    //        this.transitionTo('auth.login');
    //    }
    //},

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
