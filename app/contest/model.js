import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  aircrafttype: DS.belongsTo('aircrafttype'),
  registrations: DS.hasMany('registration', {async:true})
});
