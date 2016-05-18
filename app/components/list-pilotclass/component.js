import Ember from 'ember';

const {
    get,
    computed,
    isPresent
    } = Ember;


export default Ember.Component.extend({

    store: Ember.inject.service("store"),

    isEditing: false,


    aircrafttypeLabelCallback(item) {
        // using ember data, this might be 'item.get('name')'
        return item.get('name');
    },

    selectedAircraftType: null,

    filteredPilotClasses: computed("selectedAircraftType", function() {
        return get(this, "selectedAircraftType.name");
    }),

    actions: {
        //changedAircraftType(selected) {
        //    debugger;
        //    console.log(selected);
        //},

        save() {
            let name = this.get("name");

            if (isPresent(name)) {
                var newPilotClass = this.get("store").createRecord('pilotclass', {
                    name: name
                });

                newPilotClass.save().then(() => {
                    this.toggleProperty("isEditing");
                });

            }

        },

        toggleEditing() {
            this.toggleProperty("isEditing");
        }
    }
});
