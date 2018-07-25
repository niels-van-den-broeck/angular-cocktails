//Necessary libs
import angular from 'angular'
import ngRoute from 'angular-route'

//Directives
import TypeDirective from "./Components/TypeNav/TypeNavDirective";
import CocktailListDirective from "./Components/CocktailList/CocktailListDirective";

//Controllers
import CocktailDetailsController from './Components/CocktailDetails/CocktailDetailsController'
import HomeController from './Components/Home/HomeController'
import CocktailListController from "./Components/CocktailList/CocktailListController";
import TypeNavController from "./Components/TypeNav/TypeNavController";

//CSS Loaders
import './index.css';
import './Components/CocktailDetails/CocktailDetails.css'

const module = angular.module('app', [ngRoute])
    .controller('CocktailDetailsController', CocktailDetailsController)
    .controller('HomeController', HomeController)
    .controller('CocktailListController', CocktailListController)
    .controller('TypeNavController', TypeNavController)
    .directive('ngTypes', TypeDirective)
    .directive('ngList',CocktailListDirective)

module.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            template : require('./Components/Home/Home.html')
        })
        .when("/types/:id", {
            template :require('./Components/CocktailList/CocktailList.html')
        })
        .when("/search/:searched", {
            template : require('./Components/Home/Home.html')

        })
        .when("/cocktails/:id", {
            template :require('./Components/CocktailDetails/CocktailDetails.html')
        })
});

module.directive('autofocus', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        link : function($scope, $element) {
            $timeout(function() {
                $element[0].focus();
            });
        }
    }
}]);
