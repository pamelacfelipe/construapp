(function() {
  angular.module("construapp", ["ui.router"]);

  angular.module("construapp").config(construappConfig);

  construappConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

  function construappConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("app", {
        abstract: true,
        views: {
          header: {
            templateUrl: "/ui/header.html"
          }
        }
      })
      .state("app.dashboard", {
        url: "/",
        views: {
          "container@": {
            templateUrl: "/dashboard/dashboard-page.html"
          }
        }
      })
      // Obras
      .state("app.obras", {
        url: "/obras",
        views: {
          "container@": {
            templateUrl: "/obras/obras-page.html",
            controller: "ObrasPageController",
            controllerAs: "vm"
          }
        }
      })
      .state("app.obras.new", {
        url: "/new",
        views: {
          "container@": {
            templateUrl: "/obras/obras-form.html",
            controller: "ObrasFormController",
            controllerAs: "vm"
          }
        }
      })
      .state("app.obras.edit", {
        url: "/:id",
        views: {
          "container@": {
            templateUrl: "/obras/obras-form.html",
            controller: "ObrasFormController",
            controllerAs: "vm"
          }
        }
      })
      // Etapas
      .state("app.etapas", {
        url: "/etapas",
        views: {
          "container@": {
            templateUrl: "/etapas/etapas-page.html",
            controller: "EtapasPageController",
            controllerAs: "vm"
          }
        }
      })
      .state("app.etapas.new", {
        url: "/new",
        views: {
          "container@": {
            templateUrl: "/etapas/etapas-form.html",
            controller: "EtapasFormController",
            controllerAs: "vm"
          }
        }
      })
      .state("app.etapas.edit", {
        url: "/:id",
        views: {
          "container@": {
            templateUrl: "/etapas/etapas-form.html",
            controller: "EtapasFormController",
            controllerAs: "vm"
          }
        }
      })
      // Insumos
      .state("app.insumos", {
        url: "/insumos",
        views: {
          "container@": {
            templateUrl: "/insumos/insumos-page.html",
            controller: "InsumosPageController",
            controllerAs: "vm"
          }
        }
      })
      .state("app.insumos.new", {
        url: "/new",
        views: {
          "container@": {
            templateUrl: "/insumos/insumos-form.html",
            controller: "InsumosFormController",
            controllerAs: "vm"
          }
        }
      })
      .state("app.insumos.edit", {
        url: "/:id",
        views: {
          "container@": {
            templateUrl: "/insumos/insumos-form.html",
            controller: "InsumosFormController",
            controllerAs: "vm"
          }
        }
      });
  }
})();
