(function() {
  angular
    .module("construapp")
    .controller("ObrasFormController", ObrasFormController);

    ObrasFormController.$inject = [
    "ObrasService",
    "$state",
    "$stateParams"
  ];

  function ObrasFormController(ObrasService, $state, $stateParams) {
    var vm = this;
    vm.obra = {};
    vm.titulo = "Inserindo obra";

    if ($stateParams.id) {
      vm.titulo = "Editando obra";
      ObrasService.findById($stateParams.id).then(function(obra) {
        vm.obra = obra;
      });
    }

    vm.salvar = function() {
      if (vm.obra._id) {
        ObrasService.update(vm.obra).then(function() {
          swal({
            type: "success",
            title: "Obra atualizada com sucesso",
            showConfirmButton: false,
            timer: 1500
          });
          $state.go("app.obras");
        });
      } else {
        ObrasService.insert(vm.obra).then(function() {
          swal({
            type: "success",
            title: "Obra inserido com sucesso",
            showConfirmButton: false,
            timer: 1500
          });
          $state.go("app.obras");
        });
      }
    };
  }
})();
