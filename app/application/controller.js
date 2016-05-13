import Ember from 'ember';

let { computed } = Ember;

export default Ember.Controller.extend({

    showLogin: false,
    showRegistration: false,
    hideContent: computed.or("showLogin", "showRegistration"),

    actions: {
        clickLogin() {
            this.toggleProperty("showLogin");
        },

        clickRegistration() {
            this.toggleProperty("showRegistration");
        },

        //openLogin(/* param, event */) {
        //    this.set('showLogin', true);
        //},

        closeLogin() {
            //if (result === 'ok') {
            //    result = `${result} and dog named ${dogName}`;
            //}
            //this.set('result', result);
//debugger;
            this.set('showLogin', false);
        },

        closeRegister() {
            //if (result === 'ok') {
            //    result = `${result} and dog named ${dogName}`;
            //}
            //this.set('result', result);
//debugger;
            this.set('showRegistration', false);
        }


    }
});
