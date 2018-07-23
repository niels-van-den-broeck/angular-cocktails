const app = angular.module('app', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/types/:id", {
            templateUrl :'Directives/CocktailList/CocktailList.html'
        })

});
