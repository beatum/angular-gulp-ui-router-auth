(function() {
  'use strict';

  angular
    .module('newProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $state, $stateParams, $rootScope, $window, $templateCache) {

    // $rootScope.$on('$viewContentLoaded', function () {
    //     $templateCache.removeAll();
    // });

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    var data = [];
    var is_auth = false;

    if (typeof(Storage) !== "undefined") {
        $log.info('Good! Web Storage is support..');

        if ('data' in $window.localStorage) {


          data = JSON.parse($window.localStorage.getItem('data'));
          is_auth = data['is_auth'];
          $log.info('In fire', data, is_auth)

          // fire
          $rootScope.$on('$stateChangeStart', function(event, toState){
              if (!is_auth) {
                  $log.info('User is not auth?', !is_auth);

                    if (toState.name === "login" || toState.name === "signup") {
                      $log.info('State is login or signup', toState.name === "login", toState.name === "signup");
                      return;
                    };

                    if (toState.name === "home" && !is_auth) {
                      $log.info('User is not auth, go to signup page');
                      event.preventDefault();
                      $state.go('signup');
                      // return;
                    };
              };
              if (is_auth) {
                  $log.info('User is auth?', is_auth);
                  if(toState.name === 'home') {
                    $log.info('State is home');
                    $log.info('is_auth', is_auth);
                    return;
                  };
              };
          });

        } else {

          $log.info('Data undefined! Go to signup view');

          $rootScope.$on('$stateChangeStart', function(event, toState){

              if (toState.name === "login" || toState.name === "signup") {
                $log.info('State is login or signup', toState.name === "login", toState.name === "signup");
                return;
              };

              if (toState.name === "home") {
                $log.info('User is not auth, go to signup page with else');
                event.preventDefault();
                $state.go('signup');
                // return;
              };

          });
        }

    } else {
        $log.info('Web Storage is not support..');
        alert('Sorry! No Web Storage support..')
    };

  }

})();
