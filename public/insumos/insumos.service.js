(function() {
  angular.module("construapp").factory("InsumosService", InsumosService);

  InsumosService.$inject = ["$http"];

  function InsumosService($http) {
    var _URL = "/insumos";

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

    function insert(insumo) {
      return $http.post(_URL, insumo).then(function(response) {
        return response.data;
      });
    }

    function update(insumo) {
      return $http.put(_URL + "/" + insumo._id, insumo).then(function(response) {
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
