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

    this.get('/api/maneuversets', (schema) => {
        return schema.maneuverset.all();
    });
    this.get('/api/maneuversets/:id');

    //this.get('/api/maneuvers', (schema) => {
    //    return schema.maneuver.all();
    //});

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

    this.get('/api/rounds', (schema) => {
        return schema.round.all();
    });

    this.get('/api/pilots', (schema) => {
        return schema.round.all();
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


}

