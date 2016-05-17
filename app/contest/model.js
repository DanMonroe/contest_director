import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  aircrafttypeId: DS.attr(),
  //aircrafttype: DS.belongsTo('aircrafttype'),
  registrations: DS.hasMany('registration', {async:true})
});
