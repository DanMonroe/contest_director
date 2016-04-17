import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'td',

    classNames: ["score"],

    classNameBindings: [
        "score.droppedLow:droppedLow",
        "score.droppedHigh:droppedHigh"
    ],

    actions: {
        change() {
            console.log('change');
            //debugger;
            //console.log(this.get('score'));
        },
        changeScore() {
            console.log('changeScore');
            //debugger;
            //console.log(this.get('score'));
        },
        updateScore() {
            //debugger;
            this.sendAction('updateScore',
                this.get('score'),
                this.get('rowIndex'),
                this.get('columnIndex'));
        }
    }
});
