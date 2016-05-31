import Ember from 'ember';

// need col span to have 1 more column than there are judges
export function roundScoreColSpan(params/*, hash*/) {
  return +params + 1;
}

export default Ember.Helper.helper(roundScoreColSpan);
