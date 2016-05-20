import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            pilots: this.store.peekAll('pilot')
        });
    }
});
