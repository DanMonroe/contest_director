import Ember from 'ember';

const {
    isPresent
    } = Ember;


export default Ember.Component.extend({

    store: Ember.inject.service("store"),

    isEditing: false,

    actions: {
        save() {
            let name = this.get("name");

            if (isPresent(name)) {
                var newAircrafttype = this.get("store").createRecord('aircrafttype', {
                    name: name
                });

                newAircrafttype.save().then(() => {
                    this.toggleProperty("isEditing");
                });

            }

        },

        toggleEditing() {
            this.toggleProperty("isEditing");
        }
    }
});
