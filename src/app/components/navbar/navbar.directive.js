(function() {
  'use strict';

  angular
    .module('newProject')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $log, $window, $scope, $state) {
      var vm = this;
      var data = [];

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();

      if ('data' in $window.localStorage) {
        data = JSON.parse($window.localStorage.getItem('data'));
        $scope.is_auth = data['is_auth'];
        $log.info('Navbar status for user! Is Auth?', $scope.is_auth)
      }

      $scope.logOut = function () {
        $window.localStorage.clear();
        $log.info('Logout and Clear Storage');
        $state.go('signup')
      }

    }
  }

})();
