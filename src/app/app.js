const app = angular.module('app', ["ngRoute"]);

app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl :'Directives/Home/Home.html'
        })
        .when("/types/:id", {
            templateUrl :'Directives/CocktailList/CocktailList.html'
        })
        .when("/search/:searched", {
            templateUrl :'Directives/CocktailList/CocktailList.html'
        })
        .when("/cocktails/:id", {
            templateUrl :'Directives/CocktailDetails/CocktailDetails.html'
        })

});
