const app = angular.module('app', ["ngRoute"]);

app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl :'Components/Home/Home.html'
        })
        .when("/types/:id", {
            templateUrl :'Components/CocktailList/CocktailList.html'
        })
        .when("/search/:searched", {
            templateUrl : 'Components/Home/Home.html',

        })
        .when("/cocktails/:id", {
            templateUrl :'Components/CocktailDetails/CocktailDetails.html'
        })
});
