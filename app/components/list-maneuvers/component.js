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

    selectedManeuverSet: null,

    filteredManeuvers: computed("selectedManeuverSet.id", function() {

        let selectedManeuverSetId = get(this, "selectedManeuverSet.id");
        if (Ember.isNone(selectedManeuverSetId)) {
            return new Ember.A();
        }
        let allManeuvers = get(this, "content.maneuvers");
        let returnManeuvers = allManeuvers.filter(function(maneuver) {
            return maneuver.get("maneuverset.id") === selectedManeuverSetId;
        });
        return returnManeuvers;
    }),

    // TODO remove hack
    watchAircraftTypeChange: computed("selectedAircraftType", function() {
        this.set("selectedPilotClass", null);
        this.set("selectedManeuverSet", null);
        return "";
    }),

    // TODO remove hack
    watchPilotClassChange: computed("selectedPilotClass", function() {
        this.set("selectedManeuverSet", null);
        return "";
    }),


    actions: {

        save() {
            let name = this.get("name");
            let atype = get(this, "selectedAircraftType");
            let pilotclass = get(this, "selectedPilotClass");
            let maneuverset = get(this, "selectedManeuverSet");
            console.log(pilotclass);
            if (isPresent(name)) {
                var newManeuver = this.get("store").createRecord('maneuver', {
                    name: name,
                    aircrafttype: atype,
                    pilotclass: pilotclass,
                    maneuverset: maneuverset
                });

                newManeuver.save().then(() => {
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
