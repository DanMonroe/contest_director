import Ember from 'ember';

//export default Ember.Object.extend({
export default Ember.ObjectProxy.extend({
    droppedHigh:false,
    droppedLow:false,
    isDropped: Ember.computed.or('droppedHigh','droppedLow')
});

//    points: 0,
