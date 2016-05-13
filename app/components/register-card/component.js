import Ember from 'ember';

let { computed, get, set, isEmpty } = Ember;

export default Ember.Component.extend({

    disabledRegister: computed("userName", "password", "confirmPassword", function() {
        return isEmpty(get(this, "userName")) || isEmpty(get(this, "password")) || isEmpty(get(this, "confirmPassword"));
    }),

    actions: {
        doRegister() {
            get(this, "close")();
        },

        cancelRegister() {
            get(this, "close")();
        }
    }
});
