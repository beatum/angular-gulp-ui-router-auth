(function() {
  'use strict';

  angular
    .module('newProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log, Auth) {


    Auth.users().then(function(response){
        $scope.users = response.data.data;
        $log.info('Data is loaded');
      }, function(response){
        $log.debug(response.data.data);
      });


    $scope.byRange = function (fieldName, minValue, maxValue) {
        if (minValue === undefined || maxValue === undefined || maxValue === null || minValue === null) {
            return function predicateFunctionTwo(item) {
                return item[fieldName];
            }
        } else {
            return function predicateFunc(item) {
            return minValue <= item[fieldName] && item[fieldName] <= maxValue;
          };
      }
    };

    // $scope.byDate = function (property, startDate, endDate) {
    //     // refactor this
    //     return function (item) {
    //         if (item[property] === null) return false;
    //
    //         var itemDate = moment(item[property]);
    //         var s = moment(startDate, "DD-MM-YYYY");
    //         var e = moment(endDate, "DD-MM-YYYY");
    //
    //         if (itemDate <= s && itemDate <= e) return true;
    //         return false;
    //     }
    // };


  $scope.startDate = new Date(2010, 1, 1);
  $scope.endDate = new Date(2020, 5, 22);

  $scope.dateOptions = {
    formatYear: 'yyyy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };


  // --end--
  }
})();
