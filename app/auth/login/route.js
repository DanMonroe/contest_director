import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({

    session: inject.service(),

    actions: {
        doLogin(user) {
            //console.log("login attempted - " + user.get('model.email'));
            const currentuser = this.get('currentModel');
            this.get('session').authenticate(
                'authenticator:contestdirector',
                currentuser.email,
                currentuser.password
            ).then(() => {
                // send toast
                console.log("Logged in!");
                //this.get('flashMessages').success('Logged in!');

            }).catch((response) => {
                const { errors } = response;

                // Check if any errors have a 401 code
                if (errors.mapBy('code').indexOf(401) >= 0) {

                    // Unauthorized
                    //this.get('flashMessages').danger('There was a problem with your username or password, please try again');
                    console.log('There was a problem with your username or password, please try again');

                } else {

                    // All other API errors
                    //this.get('flashMessages').danger('Server Error');
                    console.log('Server Error');

                }
            });
        },
        doRegistration() {
            this.transitionTo('auth.register');
        },
        onCancel() {
            this.transitionTo('index');
        }

    },

    model() {
        return {
            email: '',
            password: ''
        };
    }
});
