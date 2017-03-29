(function() {
  'use strict';

  angular
    .module('newProject')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $log, $window, $state) {
    var vm = this;
    var data = [];
    var is_auth = '';


    $scope.regex = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    $scope.logIn = function () {
      var password_bitArray = sjcl.hash.sha256.hash($scope.password);
      var password_digest_sha256 = sjcl.codec.hex.fromBits(password_bitArray);
      $log.info('Check password', password_digest_sha256);
      if ('data' in $window.localStorage) {
        data = JSON.parse($window.localStorage.getItem('data'));
        if(data['password'] === password_digest_sha256 && data['email'] === $scope.email) {
          data['is_auth'] = true;
          $window.localStorage.setItem('data', JSON.stringify(data));
          $log.info('You are successfully login');
          $state.go('home');
        } else {
          $scope.errors = 'User with this credentials is not exist! Or password or email wrong! Try again or signup please!'
        };
      } else {
        $state.go('signup');
      };
    };
  };
})();
