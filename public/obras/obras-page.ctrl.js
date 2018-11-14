(function() {
  angular
    .module("construapp")
    .controller("ObrasPageController", ObrasPageController);

  ObrasPageController.$inject = ["ObrasService"];

  function ObrasPageController(ObrasService) {
    var vm = this;
    vm.registros = [];

    vm.load = function() {
      ObrasService.findAll().then(function(registros) {
        vm.registros = registros;
      });
    };

    vm.load();

    vm.excluir = function(id) {
      swal({
        title: "Deseja realmente excluir essa obra?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, excluir",
        cancelButtonText: "Cancelar",
        reverseButtons: true
      }).then(function(result) {
        if (result.value) {
          ObrasService.remove(id).then(function() {
            vm.load();
            swal({
              type: "success",
              title: "Obra excluída com sucesso",
              showConfirmButton: false,
              timer: 1500
            });
          });
        }
      });
    };
  }
})();
