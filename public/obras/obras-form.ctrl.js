(function () {
  angular
    .module("construapp")
    .controller("ObrasFormController", ObrasFormController);

  ObrasFormController.$inject = [
    "ObrasService",
    "EtapasService",
    "$state",
    "$stateParams"
  ];

  function ObrasFormController(
    ObrasService,
    EtapasService,
    $state,
    $stateParams
  ) {
    var vm = this;
    vm.registros = [];
    vm.obra = {};
    vm.busca = '';
    vm.titulo = "Inserindo obra";

    if ($stateParams.id) {
      vm.titulo = "Editando obra";
      ObrasService.findById($stateParams.id).then(function (obra) {
        vm.obra = obra;
      });
    }

    vm.salvar = function () {
      vm.obra.etapa = { _id: vm.etapa._id };
      if (vm.obra._id) {
        ObrasService.update(vm.obra).then(function () {
          swal({
            type: "success",
            title: "Obra atualizada com sucesso",
            showConfirmButton: false,
            timer: 1500
          });
          $state.go("app.obras");
        });
      } else {
        ObrasService.insert(vm.obra).then(function () {
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

    load();

    function load() {
      EtapasService.findAll().then(function (registros) {
        vm.registros = registros;
      });
    }
  }
})();
