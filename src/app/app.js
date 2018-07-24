const app = angular.module('app', ["ngRoute"]);

app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            template : '<h1>You have reached the end of the world, hi</h1>'
        })
        .when("/types/:id", {
            templateUrl :'Directives/CocktailList/CocktailList.html'
        })
        .when("/cocktails/:id", {
            templateUrl :'Directives/CocktailDetails/CocktailDetails.html'
        })

});
