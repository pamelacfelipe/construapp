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
      });
  }
})();
