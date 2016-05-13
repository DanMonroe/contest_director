import Ember from 'ember';

const { Component, computed, get } = Ember;

export default Component.extend({
    classNames: ['card'],

    actions: {
        onsubmit(user) {
            //debugger;
            get(this, "onsubmit")(user);
        },

        oncancel() {
            //debugger;
            get(this, "oncancel")();
        }
    }
});
