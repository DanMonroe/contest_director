import Ember from 'ember';

const { Component, computed, get } = Ember;

export default Component.extend({
    classNames: ['card'],

    model: null,

    actions: {
        onsubmit(user) {
            get(this, "onsubmit")(user);
        },

        oncancel() {
            get(this, "oncancel")();
        }
    }
});
