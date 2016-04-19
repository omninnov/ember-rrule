import { module, test } from 'qunit';

import RRule, { RRuleSet } from 'rrule';

module('Unit | Utility | moment import');

// Replace this with your real tests.
test('import RRule', function(assert) {
  console.log("RRule: "+RRule);
  assert.notEqual(RRule, undefined, "RRule is undefined");

  console.log("RRuleSet: "+RRuleSet);
  assert.notEqual(RRuleSet, undefined, "RRuleSet is undefined");
});
