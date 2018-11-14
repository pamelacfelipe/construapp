(function() {
  angular.module("construapp").factory("ObrasService", ObrasService);

  ObrasService.$inject = ["$http"];

  function ObrasService($http) {
    var _URL = "/obras";

    function findAll() {
      return $http.get(_URL).then(function(response) {
        return response.data;
      });
    }

    function findById(id) {
      return $http.get(_URL + "/" + id).then(function(response) {
        return response.data;
      });
    }

    function insert(obra) {
      return $http.post(_URL, obra).then(function(response) {
        return response.data;
      });
    }

    function update(obra) {
      return $http
        .put(_URL + "/" + obra._id, obra)
        .then(function(response) {
          return response.data;
        });
    }

    function remove(id) {
      return $http.delete(_URL + "/" + id);
    }

    return {
      findAll: findAll,
      findById: findById,
      insert: insert,
      update: update,
      remove: remove
    };
  }
})();
