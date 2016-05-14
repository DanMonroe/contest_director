import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({

    session: inject.service(),

    actions: {
        doLogin(user) {
            console.log("login attempted - " + user.get('model.email'));
            const currentuser = this.get('currentModel');
            this.get('session')
                .authenticate(
                'authenticator:contestdirector', currentuser.email, currentuser.password
            );
        },
        closeLogin() {
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
