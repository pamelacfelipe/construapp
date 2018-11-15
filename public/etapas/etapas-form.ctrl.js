(function() {
    angular
      .module("construapp")
      .controller("EtapasFormController", EtapasFormController);
  
      EtapasFormController.$inject = [
      "EtapasService",
      "$state",
      "$stateParams"
    ];
  
    function EtapasFormController(EtapasService, $state, $stateParams) {
      var vm = this;
      vm.etapa = {};
      vm.titulo = "Inserindo etapa";
  
      if ($stateParams.id) {
        vm.titulo = "Editando etapa";
        EtapasService.findById($stateParams.id).then(function(etapa) {
          vm.etapa = etapa;
        });
      }
  
      vm.salvar = function() {
        if (vm.etapa._id) {
          EtapasService.update(vm.etapa).then(function() {
            swal({
              type: "success",
              title: "Etapa atualizada com sucesso",
              showConfirmButton: false,
              timer: 1500
            });
            $state.go("app.etapas");
          });
        } else {
          EtapasService.insert(vm.etapa).then(function() {
            swal({
              type: "success",
              title: "Etapa inserido com sucesso",
              showConfirmButton: false,
              timer: 1500
            });
            $state.go("app.etapas");
          });
        }
      };
    }
  })();
  