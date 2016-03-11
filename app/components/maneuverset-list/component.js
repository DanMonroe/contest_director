import Ember from 'ember';

let {
    isPresent
    } = Ember;

export default Ember.Component.extend({

    store: Ember.inject.service("store"),

    isEditing: false,

    actions: {
        saveManeuverSet() {
            console.log("saving maneuverset");
            let name = this.get("name");
            console.log(name);

            if(isPresent(name)) {
                var newManeuverSet = this.get("store").createRecord('maneuverset', {
                    name: name
                });

                newManeuverSet.save().then(() => {
                    this.toggleProperty("isEditing");
                });

            }

        },
        addManeuverSet() {
            this.toggleProperty("isEditing");
        }
    }
});
