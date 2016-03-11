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

    this.post('/api/contests');

    this.get('/api/aircrafttypes', (schema) => {
        return schema.aircrafttype.all();
    });

    this.get('/api/pilotclasses', (schema) => {
        return schema.pilotclass.all();
    });

    this.get('/api/maneuversets', (schema) => {
        return schema.maneuverset.all();
    });

    this.get('/api/maneuvers', (schema) => {
        return schema.maneuver.all();
    });

    this.get('/api/rounds', (schema) => {
        return schema.round.all();
    });



}

