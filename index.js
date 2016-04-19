/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-rrule',

  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    target.import('vendor/rrule/nlp.js');
    target.import('vendor/rrule/rrule.js');

    target.import('vendor/shims/rrule.js');
  }
};
