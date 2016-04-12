import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {

        return Ember.RSVP.hash({
            maneuvers: this.store.query('maneuver', { filter: { maneuversetId: params.maneuverset_id } }),
            maneuverset: this.store.peekRecord('maneuverset', params.maneuverset_id )
        });
    }

});
