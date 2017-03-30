/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('newProject')
    .constant('malarkey', malarkey)
    .constant('sjcl', sjcl)
    .constant('moment', moment);

})();
