import Ember from 'ember';

const { computed, get, set, isEmpty } = Ember;

export default Ember.Component.extend({

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
