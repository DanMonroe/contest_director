import Ember from 'ember';

const {
    get,
    computed,
    isPresent
    } = Ember;


export default Ember.Component.extend({

    store: Ember.inject.service("store"),

    isEditing: false,

    selectLabelCallback(item) {
        return item.get('name');
    },

    selectedAircraftType: null,

    addButtonDisabled: computed.not("selectedPilotClass"),

    filteredPilotClasses: computed("selectedAircraftType.id", function() {

        // TODO reset pilot class drop down
        //this.set("selectedPilotClass", null);

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

    selectedPilotClass: null,

    filteredManeuverSets: computed("selectedPilotClass.id", function() {

        let selectedPilotClassId = get(this, "selectedPilotClass.id");
        if (Ember.isNone(selectedPilotClassId)) {
            return new Ember.A();
        }
        let allManeuverSets = get(this, "content.maneuversets");
        let returnManSets = allManeuverSets.filter(function(manSet) {
            return manSet.get("pilotclass.id") === selectedPilotClassId;
        });
        return returnManSets;
    }),

    actions: {

        save() {
            let name = this.get("name");
            let atype = get(this, "selectedAircraftType");
            let pilotclass = get(this, "selectedPilotClass");
            console.log(pilotclass);
            if (isPresent(name)) {
                var newManeuverSet = this.get("store").createRecord('maneuverset', {
                    name: name,
                    aircrafttype: atype,
                    pilotclass: pilotclass
                });

                newManeuverSet.save().then(() => {
                    this.toggleProperty("isEditing");
                });

            }

        },

        toggleEditing() {
            this.toggleProperty("isEditing");
        }
    }
});
