import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Controller, get, inject } = Ember;

export default Controller.extend({

    store: inject.service("store"),

    doNewRound: task(function * (params) {
        yield this.get('createNewRound').perform(params);
        this.transitionToRoute("contest", params.contest.id);
    }),

    createNewRound: task(function * (params) {
        let newRound = get(this, "store").createRecord('round', {
            name: params.name,
            numjudges: params.numjudges,
            drophigh: params.drophigh,
            droplow: params.droplow,
            maneuverset: params.maneuverset,
            contest: params.contest,
            pilotclass: params.pilotclass,
            order:1
        });

        //debugger;
        newRound.save().then(() => {
            debugger;
        });
//        yield newRound.save().then(() => {
//            //console.log("new round id:" + get(newRound, "id"));
//
//            this.store.query('maneuver', {
//                filter: {
//                    maneuversetId: params.maneuverset.id
//                }
//            }).then((maneuvers) => {
//                //console.log("maneuvers");
//                //console.log(maneuvers);
//                this.store.query('contestregistration', {
//                    filter: {
//                        contestId: params.contest.id,
//                        pilotclassId: params.pilotclass.id
//                    }
//                }).then((registrations) => {
//
//                    registrations.forEach((registration) => {
//                        //console.log(registration.get('pilot.fullName'));
//
//                        let newRoundscore = get(this, "store").createRecord('roundscore', {
//                            registration: registration,
//                            round: newRound,
//                            totalroundscore: 0
//                        });
//
//                        newRoundscore.save().then(() => {
//
//                            maneuvers.forEach((maneuver) => {
//                                //console.log(maneuver.get('name'));
//
//                                // TODO remove registration and round ?:
//                                let newManeuverscore = get(this, "store").createRecord('maneuverscore', {
//                                    maneuver: maneuver,
//                                    registration: registration,
//                                    round: newRound,
//                                    roundscore: newRoundscore,
//                                    totalScore: 0
//                                });
//
//                                newManeuverscore.save().then(() => {
//                                    //debugger;
//                                    //console.log("new maneuverscore id = " + get(newManeuverscore, "id"));
//
//
//                                    for(let i = 0; i < params.numjudges; i++) {
//
//                                        let newscore = get(this, "store").createRecord('score', {
//                                            points: 0,
//                                            maneuverscore: newManeuverscore
//                                        });
//
//                                        newscore.save().then(() => {
//                                            //console.log("new score id = " + get(newscore, "id"));
//
//                                        });
//                                    }
//
//                                });
//
//                            }); // foreach maneuver
//                        }); // new roundscore
//                        //debugger;
//                    });  // for each registration
//                });
////debugger;
//            });
//        });


//console.log("create done");
    }).enqueue(),

    actions: {
        saveNewRound(params) {
            console.log('in saveNewRound controller');
            console.log(params);

            this.get('doNewRound').perform(params);

        },
        cancelNewRound(params) {
            this.transitionToRoute("contest", params.contest_id);
        }
    }
});
