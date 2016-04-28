export default function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
     Config (with defaults).

     Note: these only affect routes defined *after* them!
     */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
     Shorthand cheatsheet:

     this.get('/posts');
     this.post('/posts');
     this.get('/posts/:id');
     this.put('/posts/:id'); // or this.patch
     this.del('/posts/:id');
     */


    this.get('/api/contests', (schema) => {
        return schema.contest.all();
    });
    this.get('/api/contests/:id');

    this.post('/api/contests');

    this.get('/api/aircrafttypes', (schema) => {
        return schema.aircrafttype.all();
    });

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

    this.get('/api/pilots', (db, request) => {
        let pilots = [];
        if (Object.keys(request.queryParams).length === 0) {
            pilots = db.pilot.all();
        } else {
            let filteredPilots = request.queryParams['filter[pilotId]'];
            pilots = db.pilot.where({pilotId: filteredPilots});
        }

        return pilots;
    });
    this.get('/api/pilots/:id');


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
            maneuverscores = db.maneuverscore.where({registrationId: registrationFilter});
        }

        return maneuverscores;
    });
    this.get('/api/maneuverscores/:id');

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
}

