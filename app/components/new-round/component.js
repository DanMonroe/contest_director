import Ember from 'ember';

let { computed, isPresent } = Ember;

export default Ember.Component.extend({

    store: Ember.inject.service("store"),

    contest: null,
    pilotclass: null,

    isSaveEnabled: computed("name", "numjudges", function() {
        //debugger;
        return isPresent(this.get("name")) && isPresent(this.get("numjudges"));
    }),

    isSaveDisabled: computed.not("isSaveEnabled"),


    actions: {
        saveRound() {

            let name = this.get("name");
            console.log("Save Round %s", name);

            if(isPresent(name)) {
                var newRound = this.get("store").createRecord('round', {
                    name: name
                });

                newRound.save().then(() => {
                    this.set("name", "");
                });

            }
        },
        cancel() {
            console.log("Cancel");
        }
    }
});
