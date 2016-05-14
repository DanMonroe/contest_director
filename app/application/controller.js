import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({

    showLogin: false,
    showRegistration: false,
    hideContent: computed.or("showLogin", "showRegistration"),

    userModel: null,

    openLogin() {
        this.set("userModel", {
            email: '',
            password: ''
        });
        this.toggleProperty("showLogin");
    },

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
            this.openLogin();
        },

        clickRegistration() {
            this.set("userModel", this.store.createRecord('user'));
            this.toggleProperty("showRegistration");
        },

        doLogin(user) {
            //debugger;
            //console.log("login attempted - ");
            console.log("login attempted - " + user.get('model.email'));
            this.resetLogin();
        },

        doRegister(user) {
            user.get('model').save()
                .then(() => {
                    this.set('showRegistration', false);
                    this.openLogin();
                    //this.transitionTo('auth.login');
                });
        },

        closeLogin() {
            this.resetLogin();
        },

        closeRegister() {
            this.resetRegistration();
        }


    }
});
