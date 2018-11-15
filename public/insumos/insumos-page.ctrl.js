(function() {
  angular
    .module("construapp")
    .controller("InsumosPageController", InsumosPageController);

  InsumosPageController.$inject = ["InsumosService"];

  function InsumosPageController(InsumosService) {
    var vm = this;
    vm.registros = [];

    vm.load = function() {
      InsumosService.findAll().then(function(registros) {
        vm.registros = registros;
      });
    };

    vm.load();

    vm.excluir = function(id) {
      swal({
        title: "Deseja realmente excluir esso insumo?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, excluir",
        cancelButtonText: "Cancelar",
        reverseButtons: true
      }).then(function(result) {
        if (result.value) {
          InsumosService.remove(id).then(function() {
            vm.load();
            swal({
              type: "success",
              title: "Insumo excluído com sucesso",
              showConfirmButton: false,
              timer: 1500
            });
          });
        }
      });
    };
  }
})();
