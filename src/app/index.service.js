(function() {
  'use strict';

  angular
    .module('newProject')
    .factory('Auth', ['$http', '$state', '$q',
        function ($http, $state, $q) {
      return {
          users: function() {
            var deferred = $q.defer();
            $http.get('users.json')
              .then(function(response) {
                  deferred.resolve(response);
                  // console.log('Data loaded')
              }, function error(response) {
                  deferred.reject(response);
                  // console.log('Data error', response)
            });
            return deferred.promise;
          }
      };
    }]);

})();
