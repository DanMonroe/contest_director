import Ember from 'ember';
import { email, password } from '../../utils/user-validations';
import { buildValidations } from 'ember-cp-validations';

const { Component, computed, get, isEmpty } = Ember;

const Validations = buildValidations({
    'model.email': email,
    'model.password': password
});


export default Component.extend(Validations, {

    model: null,

    emailFieldErrors: computed(function() {
        //debugger;
        //model.validations.attrs.email.messages
       return [];
    }),
    disabledLogin: computed("model.userName", "model.password", function() {
        //debugger;
        return isEmpty(get(this, "model.userName")) || isEmpty(get(this, "model.password"));
    }),

    actions: {
        doLogin() {
            get(this, "onsubmit")(get(this, "model"));
        },

        cancelLogin() {
            get(this, "close")();
        }
    }
});
