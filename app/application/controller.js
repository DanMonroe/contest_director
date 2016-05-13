import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({

    showLogin: false,
    showRegistration: false,
    hideContent: computed.or("showLogin", "showRegistration"),

    userModel: null,

    resetLogin() {
        this.set("userModel", null);
        this.set('showLogin', false);
    },

    resetRegistration() {
        this.set("userModel", null);
        this.set('showRegistration', false);
    },

    actions: {
        clickLogin() {
            this.set("userModel", this.store.createRecord('user'));
            this.toggleProperty("showLogin");
        },

        clickRegistration() {
            this.set("userModel", {
                email: '',
                password: ''
            });
            this.toggleProperty("showRegistration");
        },

        doLogin(user) {
            console.log("login attempted - ");
            //console.log("login attempted - " + user.userName);
            this.resetLogin();
        },

        doRegister(user) {
            console.log("Registration complete - ");
            //console.log("Registration complete - " + user.userName);
            this.resetRegistration();
        },

        closeLogin() {
            this.resetLogin();
        },

        closeRegister() {
            this.resetRegistration();
        }


    }
});
