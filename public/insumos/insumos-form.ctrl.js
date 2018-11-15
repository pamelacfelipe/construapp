(function() {
  angular
    .module("construapp")
    .controller("InsumosFormController", InsumosFormController);

  InsumosFormController.$inject = ["InsumosService", "$state", "$stateParams"];

  function InsumosFormController(InsumosService, $state, $stateParams) {
    var vm = this;
    vm.insumo = {};
    vm.titulo = "Inserindo insumo";

    if ($stateParams.id) {
      vm.titulo = "Editando insumo";
      InsumosService.findById($stateParams.id).then(function(insumo) {
        vm.insumo = insumo;
      });
    }

    vm.salvar = function() {
      if (vm.insumo._id) {
        InsumosService.update(vm.insumo).then(function() {
          swal({
            type: "success",
            title: "Insumo atualizado com sucesso",
            showConfirmButton: false,
            timer: 1500
          });
          $state.go("app.insumos");
        });
      } else {
        InsumosService.insert(vm.insumo).then(function() {
          swal({
            type: "success",
            title: "Insumo inserido com sucesso",
            showConfirmButton: false,
            timer: 1500
          });
          $state.go("app.insumos");
        });
      }
    };
  }
})();
