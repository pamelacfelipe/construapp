(function() {
  angular.module("construapp").factory("EtapasService", EtapasService);

  EtapasService.$inject = ["$http"];

  function EtapasService($http) {
    var _URL = "/etapas";

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

    function insert(etapa) {
      return $http.post(_URL, etapa).then(function(response) {
        return response.data;
      });
    }

    function update(etapa) {
      return $http
        .put(_URL + "/" + etapa._id, etapa)
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
