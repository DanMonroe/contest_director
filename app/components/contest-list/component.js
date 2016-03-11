import Ember from 'ember';

let {
    isPresent
    } = Ember;

export default Ember.Component.extend({

    store: Ember.inject.service("store"),

    isEditing: false,

    actions: {
        saveContest() {
            console.log("saving");
            let name = this.get("name");
            console.log(name);

            if(isPresent(name)) {
                var newContest = this.get("store").createRecord('contest', {
                    name: name
                });

                newContest.save().then(() => {
                    this.toggleProperty("isEditing");
                });

            }

        },
        addContest() {
            this.toggleProperty("isEditing");
        }
    }
});
