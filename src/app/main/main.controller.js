(function() {
  'use strict';

  angular
    .module('newProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log, Auth, $filter) {


    Auth.users().then(function(response){
        $scope.users = response.data.data;
        $log.info('Data is loaded');
      }, function(response){
        $log.debug(response.data.data);
      });


    $scope.byRange = function (fieldName, minValue, maxValue) {
        if (minValue === undefined || maxValue === undefined) {
            return function preFunc1(item) {
              return item[fieldName];
            }
        } else {
            return function preFunc2(item) {
              if (!minValue || !maxValue) {
                return item[fieldName];
              } else {
                return item[fieldName] >= minValue && item[fieldName] <= maxValue;
              }
          }
      }
    };


    $scope.dateRangeFilter = function (property, startDate, endDate) {
        if(startDate === null || endDate === null){
          return function preFunc1 (item) {
            return item[property]
          }
        } else {
          return function preFunc2 (item) {

            var itemDate = moment(item[property]);
            var s = moment(startDate, "DD-MM-YYYY");
            var e = moment(endDate, "DD-MM-YYYY");

            if (s === null || e === null) {
              return item[property]
            } else {
              return (itemDate >= s && itemDate <= e);
            }

          }
        }
    };

  $scope.startDate = new Date(2014, 1 , 1);
  $scope.endDate = new Date(2021, 4, 2);


  $scope.dateOptions = {
    formatYear: 'yyyy',
    minDate: new Date(2014, 1 , 1),
    maxDate: new Date(2021, 4, 2),
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

  }
})();
