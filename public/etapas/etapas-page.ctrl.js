(function() {
  angular
    .module("construapp")
    .controller("EtapasPageController", EtapasPageController);

  EtapasPageController.$inject = ["EtapasService"];

  function EtapasPageController(EtapasService) {
    var vm = this;
    vm.registros = [];

    vm.load = function() {
      EtapasService.findAll().then(function(registros) {
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
          EtapasService.remove(id).then(function() {
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
