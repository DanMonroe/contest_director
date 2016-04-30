import Ember from 'ember';

let { Controller, get, inject } = Ember;

export default Controller.extend({

    store: inject.service("store"),

    actions: {
        saveNewRound(params) {
            console.log('in saveNewRound controller');
            console.log(params);

            let newRound = get(this, "store").createRecord('round', {
                name: params.name,
                numjudges: params.numjudges,
                drophigh: params.drophigh,
                droplow: params.droplow,
                maneuverset: params.maneuverset,
                contest: params.contest,
                pilotclass: params.pilotclass
            });
            
            newRound.save().then(() => {
                console.log("new round id:" + get(newRound, "id"));

                this.store.query('registration', {
                    filter: {
                        contestId: params.contest.id,
                        pilotclassId: params.pilotclass.id
                    }
                }).then((registrations) => {

                    let maneuverScoreIds = [];

                    registrations.forEach((registration, index, enumerable) => {
                        console.log(registration.get('pilot.fullName'));


                        let newManeuverscore = get(this, "store").createRecord('maneuverscore', {
                            maneuverId: params.maneuverset.id,
                            registrationId: registration.get('id'),
                            roundId: get(newRound, "id")
                        });

                        newManeuverscore.save().then(() => {
                            //debugger;
                            console.log("new maneuverscore id = " + get(newManeuverscore, "id"));
                            //maneuverScoreIds.push(get(newManeuverscore, "id"));

                            //debugger;
                            let manScoreId = get(newManeuverscore, "id");

                            for(let i = 0; i < params.numjudges; i++) {

                                let newscore = get(this, "store").createRecord('score', {
                                    points: 0,
                                    maneuverscoreId: manScoreId
                                });

                                newscore.save().then(() => {
                                    console.log("new score id = " + get(newscore, "id"));

                                });
                            }



                        });
                        //debugger;
                    });
//debugger;
                });
//debugger;

                //get(this, "model.registeredpilots").forEach(function (item, index, enumerable) {
                //    console.log("here");
                //});
                //this.transitionToRoute("contest", params.contest.id)
            });

        },
        cancelNewRound(params) {
            this.transitionToRoute("contest", params.contest_id)
        }
    }
});
