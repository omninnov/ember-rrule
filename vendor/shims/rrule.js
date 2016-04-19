(function() {
  function vendorModule() {
    'use strict';

    return { 'default': RRule, 'RRuleSet': RRuleSet };
  }

  define('rrule', [], vendorModule);
})();
