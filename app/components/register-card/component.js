import Ember from 'ember';
import { email, password, passwordConfirmation } from '../../utils/user-validations';
import { buildValidations } from 'ember-cp-validations';

const { Component, computed, get, isEmpty } = Ember;

const Validations = buildValidations({
    'model.email': email,
    'model.password': password,
    'model.passwordConfirmation': passwordConfirmation
});


export default Component.extend(Validations, {

    model: null,

    disabledRegister: computed("userModel.email", "userModel.password", "userModel.confirmPassword", function() {
        return isEmpty(get(this, "userModel.email")) || isEmpty(get(this, "userModel.password")) || isEmpty(get(this, "userModel.confirmPassword"));
    }),

    actions: {
        doRegister() {
            get(this, "onsubmit")(get(this, "model"));
        },

        cancelRegister() {
            get(this, "close")();
        }
    }
});
