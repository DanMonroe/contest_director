import Ember from 'ember';

export default Ember.Object.extend({
//export default Ember.ObjectProxy.extend({
    points: 0,
    droppedHigh:false,
    droppedLow:false,
    isDropped: Ember.computed.or('droppedHigh','droppedLow')
});