(function() {
  'use strict';

  angular
    .module('newProject')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController($scope, $log, $window, $state) {


    // https://glynrob.com/javascript/client-side-hashing-and-encryption/


    $scope.regex = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    $scope.signUp = function(){

      var password1_bitArray = sjcl.hash.sha256.hash($scope.password1);
      var password1_digest_sha256 = sjcl.codec.hex.fromBits(password1_bitArray);

      var data = JSON.stringify({
        "email": $scope.email,
        "password": password1_digest_sha256,
        "is_auth": false
      });

      $window.localStorage.setItem('data', data);

      $log.info('Save data to local storage');

      $state.go('login');

    };
  }
})();
