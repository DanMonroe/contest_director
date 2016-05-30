import Ember from 'ember';
import DisplayScore from '../../objects/displayScore';

export default Ember.Component.extend({

    tagName: 'tr',
    classNames: ["score-row"],

    maneuver: null,

    sortedScores: Ember.computed.sort('maneuverscore.scores.@each.points', function (score1, score2) {
        if (+score1.get('points') > +score2.get('points')) {
            return 1;
        } else if (+score1.get('points') < +score2.get('points')) {
            return -1;
        }
        return 0;
    }),

    displayScores: Ember.computed('maneuverscore.scores.@each.points', function () {
//debugger;

//console.log("displayScores");
        let scores = this.get('maneuverscore.scores');
        if (Ember.isPresent(scores)) {

            var numLowToDrop = +this.get('maneuverscore.round.droplow'),
                numHighToDrop = +this.get('maneuverscore.round.drophigh');

            let returnArray = scores.map(function (item) {
//console.log(item);
//debugger;
                return DisplayScore.create({
                    content: item,
                    //points: item.get("points"),
                    droppedLow: false,
                    droppedHigh: false

                });
            });


            // clone
            let arrayToSort = returnArray.map(function (item) {
                return item;
            });
            let sortedArray = arrayToSort.sort(function (score1, score2) {
                if (+score1.get('points') > +score2.get('points')) {
                    return 1;
                } else if (+score1.get('points') < +score2.get('points')) {
                    return -1;
                }
                return 0;
            });


            sortedArray.forEach(function (item, index, enumerable) {
                item.set('droppedLow', index < numLowToDrop);
                item.set('droppedHigh', index >= (enumerable.length - numHighToDrop));

            });

            return returnArray;
        } else {
            return Ember.A();
        }
    }),

    countedDisplayScores: Ember.computed.filterBy('displayScores', 'isDropped', false),

    countedDisplayScorePoints: Ember.computed.mapBy('countedDisplayScores', 'points'),

    calculatedTotal: Ember.computed('countedDisplayScorePoints', function () {
        let totalScore = 0;
        this.get('countedDisplayScorePoints').forEach(function (item) {
            totalScore += +item;
        });

        if (Ember.isPresent(this.get('maneuverscore.maneuver.kfactor'))) {
            totalScore *= +this.get('maneuverscore.maneuver.kfactor');
        }
        this.set('maneuverscore.totalScore', totalScore);
        return totalScore;
    }),

    moveFocus: (numManeuvers, numJudges, rowIndex, columnIndex) => {
        //debugger;

        rowIndex++;

        if(rowIndex >= numManeuvers) {
            rowIndex = 0;
            columnIndex++;
        }

        if(columnIndex >= numJudges) {
            columnIndex = 0;
        }

        Ember.$('#score_' + rowIndex + '_' + columnIndex).focus();
    },

    actions: {
        updateScore(/*displayScore, rowIndex, columnIndex*/) {
            //debugger;

            //debugger;
            //var scoreContent = displayScore.get('content');
            //var score = displayScore.get('points');
            //console.log("updating... %s %s %s score: %s", displayScore, rowIndex, columnIndex, score);

//            scoreContent.save();


            //this.moveFocus(this.get('parentView.maneuvers.length'), this.get('parentView.judges.length'), rowIndex, columnIndex);
        }
    }

});
