import Ember from 'ember';

const {
    isPresent
    } = Ember;


export default Ember.Component.extend({

    store: Ember.inject.service("store"),

    isEditing: false,

    actions: {
        save() {
            let firstname = this.get("firstname");
            let lastname = this.get("lastname");
            let email = this.get("email");
            let phone = this.get("phone");
            let amanumber = this.get("amanumber");

            if (isPresent(firstname)) {
                var newPilot = this.get("store").createRecord('pilot', {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    phone: phone,
                    amanumber: amanumber
                });

                newPilot.save().then(() => {
                    this.toggleProperty("isEditing");
                });

            }

        },

        toggleEditing() {
            this.toggleProperty("isEditing");
        }
    }
});
