import Ember from 'ember';

const {
    isPresent
    } = Ember;

export default Ember.Component.extend({

    store: Ember.inject.service("store"),

    isEditing: false,
    maneuverset: null,

    actions: {
        saveManeuver() {
            console.log("saving maneuver");
            let name = this.get("name");
            console.log(name);

            if(isPresent(name)) {
                var newManeuver = this.get("store").createRecord('maneuver', {
                    name: name
                });

                newManeuver.save().then(() => {
                    this.toggleProperty("isEditing");
                });

            }

        },
        addManeuver() {
            this.toggleProperty("isEditing");
        }
    }
});
