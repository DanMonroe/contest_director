import Ember from 'ember';

let { computed, get, set, isEmpty } = Ember;

export default Ember.Component.extend({

    disabledLogin: computed("userName", "password", function() {
        return isEmpty(get(this, "userName")) || isEmpty(get(this, "password"));
    }),

    actions: {
        openPromptDialog(/* param, event */) {
            set(this, 'showLogin', true);
        },

        doLogin() {
            get(this, "close")();
        },

        cancelLogin() {
            get(this, "close")();
        }
    }
});
