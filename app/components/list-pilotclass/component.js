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
        return item.get('name');
    },

    selectedAircraftType: null,

    addButtonDisabled: computed.not("selectedAircraftType"),

    filteredPilotClasses: computed("selectedAircraftType.id", function() {

        let selectedAircraftId = get(this, "selectedAircraftType.id");
        if (Ember.isNone(selectedAircraftId)) {
            return new Ember.A();
        }
        let allClasses = get(this, "content.pilotclasses");
        let returnClasses = allClasses.filter(function(pilotClass) {
            return pilotClass.get("aircrafttype.id") === selectedAircraftId;
        });
        return returnClasses;
    }),

    actions: {

        save() {
            let name = this.get("name");
            let atype = get(this, "selectedAircraftType");
            console.log(atype);
            if (isPresent(name)) {
                var newPilotClass = this.get("store").createRecord('pilotclass', {
                    name: name,
                    aircrafttype: atype
                });

                newPilotClass.save().then(() => {
                    this.set("name", null);
                    this.toggleProperty("isEditing");
                });

            }

        },

        toggleEditing() {
            this.toggleProperty("isEditing");
        }
    }
});
