import Ember from 'ember';

const { computed, get } = Ember;

export default Ember.Component.extend({
    tagName: 'td',

    classNames: ["score"],

    classNameBindings: [
        "score.droppedLow:droppedLow",
        "score.droppedHigh:droppedHigh"
    ],

    tabIndex: computed("rowIndex", "columnIndex", "numManeuvers", function() {
        let row = get(this, "rowIndex");
        let col = get(this, "columnIndex");
        let numManeuvers = get(this, "numManeuvers");

        let index = ((col*numManeuvers) + row) + 1;

        return index;
    }),

    //didInsertElement() {
    //    var self = this,
    //        ctx = this.$('input').keydown(function (event) {
    //
    //            console.log(event.which);
    //
    //            if (event.which === 9) {
    //                // [TAB]
    //                event.preventDefault();
    //                self.send('inputTab', ctx.val());
    //            }
    //        });
    //},

    actions: {
        inputEnter(strInput) {
            console.log('pressed [ENTER] in input ', strInput);
        },
        inputTab(strInput) {
            console.log('pressed [TAB] in input ', strInput);
        },

        change() {
            console.log('change');
            //debugger;
            //console.log(this.get('score'));
        },
        changeScore(score) {
            console.log('changeScore');
//debugger;
//console.log(this.attrs);
            //this.sendAction('updateScore',
            //    score,
            //    this.get('rowIndex'),
            //    this.get('columnIndex'));

        },
        updateScore() {
console.log('updateScore');
            //debugger;
            //this.sendAction('updateScore',
            //    this.get('score'),
            //    this.get('rowIndex'),
            //    this.get('columnIndex'));
        },

        keyPressed(e) {
            //console.log(e);
        }
    }
});
