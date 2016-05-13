import Ember from 'ember';

const { computed, Component, get, inject, isPresent } = Ember;

export default Component.extend({

    store: inject.service("store"),

    contest: null,
    pilotclass: null,
    maneuversets: null,
    numjudges: 3,
    drophigh: 0,
    droplow: 0,
    selectedManeuverset: null,
    rounds: null,
    name: "",

    isSaveDisabled: computed.not("allFieldsValid"),

    allFieldsValid: computed("name", "numjudges", "drophigh", "droplow", function () {
        if ( !isPresent(get(this, "name"))) {
            return false;
        }
        if ( !isPresent(get(this, "numjudges")) || (get(this, "numjudges") < 0) || (get(this, "numjudges") > 10) ) {
            return false;
        }
        if ( !isPresent(get(this, "drophigh")) || get(this, "drophigh") < 0 ) {
            return false;
        }
        if ( !isPresent(get(this, "droplow")) || get(this, "droplow") < 0 ) {
            return false;
        }
        if ( get(this, "droplow") >= (get(this, "numjudges") - get(this, "drophigh"))) {
            return false;
        }
        if ( get(this, "drophigh") >= (get(this, "numjudges") - get(this, "droplow"))) {
            return false;
        }
        return true;
    }),

    //dropScoreConstraints: [
    //    {
    //        'message': 'Can not drop more scores then there are judges.',
    //        'validate': (currentValue) => {
    //            console.log(arguments);
    //              return (
    //                  ( get(this, "droplow") >= (get(this, "numjudges") - get(this, "drophigh"))) ||
    //                  ( get(this, "drophigh") >= (get(this, "numjudges") - get(this, "droplow")))
    //              )
    //    }
    //],

    maneuversetLabelCallback(maneuverset) {
        return get(maneuverset, 'name');
    },

    init() {
        this._super(...arguments);

        this.set("selectedManeuverset", get(this, "maneuversets.firstObject"));

        let nextRoundNum = 1;
        if(isPresent(get(this, "rounds"))) {
            let lastRound = get(this, "rounds.lastObject");
            this.set("numjudges", isPresent(get(lastRound, "numjudges")) ? get(lastRound, "numjudges") : 3);
            this.set("drophigh", isPresent(get(lastRound, "drophigh")) ? get(lastRound, "drophigh") : 0);
            this.set("droplow", isPresent(get(lastRound, "droplow")) ? get(lastRound, "droplow") : 0);
            this.set("selectedManeuverset", get(lastRound, "maneuverset"));
            nextRoundNum = +get(this, "rounds.length") + 1;
        }
        this.set("name", "Round " + nextRoundNum);
    },

    actions: {
        saveRound() {
            let params =
            {
                name: get(this, "name"),
                numjudges: get(this, "numjudges"),
                drophigh: get(this, "drophigh"),
                droplow: get(this, "droplow"),
                maneuverset: get(this, "selectedManeuverset"),
                contest: get(this, "contest"),
                pilotclass: get(this, "pilotclass")
            };

            this.get('onSaveRound')(params);
        },

        cancelNewRound() {
            let params =
            {
                contest_id: get(this, "contest.id")
            };

            this.get('onCancelRound')(params);
        },

        //saveRoundOld() {
        //    //console.log(params);
        //    let params =
        //    {
        //            name: get(this, "name"),
        //            numjudges: get(this, "numjudges"),
        //            drophigh: get(this, "drophigh"),
        //            droplow: get(this, "droplow"),
        //            maneuverset: get(this, "selectedManeuverset")
        //    };
        //
        //console.log(params);
        //
        //    this.sendAction('saveNewRound', params);
            //
            //let newRound = get(this, "store").createRecord('round', {
            //    name: get(this, "name"),
            //    numjudges: get(this, "numjudges"),
            //    drophigh: get(this, "drophigh"),
            //    droplow: get(this, "droplow"),
            //    maneuverset: get(this, "selectedManeuverset")
            //});
            //
            //newRound.save().then(() => {
            //    this.transitionTo("contest", get(this, "contest"));
            //});
        //},
    }
});
