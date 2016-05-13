import Ember from 'ember';

const {
    isPresent
    } = Ember;

export default Ember.Component.extend({

    store: Ember.inject.service("store"),

    isEditing: false,

    actions: {
        saveContest() {
            let name = this.get("name");

            if(isPresent(name)) {
                var newContest = this.get("store").createRecord('contest', {
                    name: name
                });

                newContest.save().then(() => {
                    this.toggleProperty("isEditing");
                });

            }

        },

        toggleContest() {
            this.toggleProperty("isEditing");
        }
    }
});
