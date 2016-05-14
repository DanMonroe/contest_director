import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
    host: config.apiHost,
    namespace: "api",

    urlForCreateRecord(modelName/*, snapshot*/) {
        switch(modelName) {
            case 'user':
            case 'users':
                return this._super.apply(this, arguments).replace('users', 'register');
            default:
                return this._super(...arguments);
        }
    }
});
