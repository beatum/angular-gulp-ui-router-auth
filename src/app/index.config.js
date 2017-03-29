(function() {
  'use strict';

  angular
    .module('newProject')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);


    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  }
})();


