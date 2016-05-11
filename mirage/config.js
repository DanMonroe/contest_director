export default function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
     Config (with defaults).

     Note: these only affect routes defined *after* them!
     */

     this.urlPrefix = 'http://localhost:4000';    // make this `http://localhost:8080`, for example, if your API is on a different server
     //this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing
     this.timing = 0;      // delay for each request, automatically set to 0 during testing

    /*
     Shorthand cheatsheet:

     this.get('/posts');
     this.post('/posts');
     this.get('/posts/:id');
     this.put('/posts/:id'); // or this.patch
     this.del('/posts/:id');
     */


    //this.get('/api/contests', (schema) => {
    //    return schema.contest.all();
    //});
    this.get('/api/contests/:id');

    this.post('/api/contests');

    //this.get('/api/aircrafttypes', (schema) => {
    //    return schema.aircrafttype.all();
    //});

    this.get('/api/pilotclasses', (db, request) => {
        let pilotclasses = [];
        if (Object.keys(request.queryParams).length === 0) {
            pilotclasses = db.pilotclass.all();
        } else {
            let filteredPilotClasses = request.queryParams['filter[aircrafttypeId]'];
            pilotclasses = db.pilotclass.where({aircrafttypeId: filteredPilotClasses});
        }

        return pilotclasses;
    });
    this.get('/api/pilotclasses/:id');

    this.get('/api/maneuversets', (db, request) => {
        let maneuversets = [];
        if (Object.keys(request.queryParams).length === 0) {
            maneuversets = db.maneuverset.all();
        } else {
            let pilotclassFilter = request.queryParams['filter[pilotclassId]'];
            maneuversets = db.maneuverset.where({pilotclassId: pilotclassFilter});
        }

        return maneuversets;

    });
    this.get('/api/maneuversets/:id');

    this.get('/api/maneuvers', function (db, request) {
        let maneuvers = [];
        if (Object.keys(request.queryParams).length === 0) {
            maneuvers = db.maneuver.all();
        } else {
            let filteredManeuvers = request.queryParams['filter[maneuversetId]'];
            maneuvers = db.maneuver.where({maneuversetId: filteredManeuvers});
        }

        return maneuvers;
    });
    this.get('/api/maneuvers/:id');

    this.get('/api/rounds', (db, request) => {
        let rounds = [];
        if (Object.keys(request.queryParams).length === 0) {
            rounds = db.round.all();
        } else {
            let contestFilter = request.queryParams['filter[contestId]'];
            let pilotclassFilter = request.queryParams['filter[pilotclassId]'];
            rounds = db.round.where({contestId: contestFilter, pilotclassId: pilotclassFilter});
        }

        return rounds;
    });
    this.get('/api/rounds/:id');
    this.post('/api/rounds');



//    this.post('/api/rounds', (db, request) => {
////debugger;
//        let round = db.round;
//        var params = JSON.parse(request.requestBody);
//console.log("Mirage");
//console.log(params);
//
//        let newRound = db.round.create(params);
//
//        let maneuvers = db.maneuver.where(
//        {
//            maneuversetId: params.data.relationships.maneuverset.data.id
//        });
//
//        let registrations = db.registration.where(
//        {
//            contestId: params.data.relationships.contest.data.id,
//            pilotclassId: params.data.relationships.pilotclass.data.id
//        });
//
//
//        registrations.forEach((registration, index, enumerable) => {
//            console.log(registration.pilot.firstName + " " + registration.pilot.lastName);
//
//            maneuvers.forEach((maneuver, index, enumerable) => {
//                console.log(maneuver.name);
//
//                let newManeuverscore = db.maneuverscore.create(
//                {
//                    maneuver: maneuver,
//                    registration: registration,
//                    round: newRound
//                });
//
//                // create a new score for each judge
//                for(let i = 0; i < params.data.attributes.numjudges; i++) {
//
//                    let newscore = db.score.create({
//                        points: 0,
//                        maneuverscore: newManeuverscore
//                    });
//
//                    newManeuverscore.reload();
//                }
//
//
//            }); // maneuvers for each
//
//            registration.reload();
//        }); // registrations for each
//
//        newRound.reload();
////debugger;
//        return newRound;
//    });

    //this.get('/api/pilots', (db, request) => {
    //    let pilots = [];
    //    if (Object.keys(request.queryParams).length === 0) {
    //        pilots = db.pilot.all();
    //    } else {
    //        let filteredPilots = request.queryParams['filter[pilotId]'];
    //        pilots = db.pilot.where({pilotId: filteredPilots});
    //    }
    //
    //    return pilots;
    //});
    //this.get('/api/pilots/:id');


    this.get('/api/registrations', (db, request) => {
        let registrations = [];
        if (Object.keys(request.queryParams).length === 0) {
            registrations = db.registration.all();
        } else {
            let contestFilter = request.queryParams['filter[contestId]'];
            let pilotclassFilter = request.queryParams['filter[pilotclassId]'];
            registrations = db.registration.where({contestId: contestFilter, pilotclassId: pilotclassFilter});
        }

        return registrations;
    });

    this.get('/api/maneuverscores', (db, request) => {
        let maneuverscores = [];
        if (Object.keys(request.queryParams).length === 0) {
            maneuverscores = db.maneuverscore.all();
        } else {
            let registrationFilter = request.queryParams['filter[registrationId]'];
            let roundFilter = request.queryParams['filter[roundId]'];
            maneuverscores = db.maneuverscore.where({registrationId: registrationFilter, roundId: roundFilter});
        }

        return maneuverscores;
    });
    this.get('/api/maneuverscores/:id');
    this.post('/api/maneuverscores');

    this.get('/api/roundscores', (db, request) => {
        let roundscores = [];
        if (Object.keys(request.queryParams).length === 0) {
            roundscores = db.roundscore.all();
        } else {
            let registrationFilter = request.queryParams['filter[registrationId]'];
            let roundFilter = request.queryParams['filter[roundId]'];
            if(registrationFilter) {
                roundscores = db.roundscore.where({registrationId: registrationFilter, roundId: roundFilter});
            } else {
                roundscores = db.roundscore.where({roundId: roundFilter});
            }
        }

        return roundscores;
    });
    this.get('/api/roundscores/:id');
    this.post('/api/roundscores');
    this.patch('/api/roundscores/:id');


    this.get('/api/scores', (db, request) => {
        let scores = [];
        //if (Object.keys(request.queryParams).length === 0) {
            scores = db.score.all();
        //} else {
        //    let maneuverscoreFilter = request.queryParams['filter[maneuverscoreId]'];
        //    scores = db.score.where({maneuverscoreId: maneuverscoreFilter});
        //}

        return scores;
    });
    this.get('/api/scores/:id');
    this.post('/api/scores');
    this.patch('/api/scores/:id');

    //
    // this.urlPrefix = 'http://localhost:4000';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // //this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
    //
    //this.passthrough('/api/pilots');
    //this.passthrough('/pilots');

    //this.namespace = 'api';
    this.passthrough('/api/aircrafttypes');
    this.passthrough('/api/pilots');
    this.passthrough('/api/contests');

}

