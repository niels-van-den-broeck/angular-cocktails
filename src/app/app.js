//Necessary libs
import angular from 'angular'
import ngRoute from 'angular-route'
import $ from 'jquery'

//Directives
import TypeDirective from "./Components/TypeNav/TypeNavDirective";
import CocktailListDirective from "./Components/CocktailList/CocktailListDirective";

//Controllers
import CocktailDetailsController from './Components/CocktailDetails/CocktailDetailsController'
import HomeController from './Components/Home/HomeController'
import CocktailListController from "./Components/CocktailList/CocktailListController";
import TypeNavController from "./Components/TypeNav/TypeNavController";

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import './Components/CocktailDetails/CocktailDetails.css'

//Configs
import RouteConfig from "./Config/RouteConfig";

//Initialise module
const module = angular.module('app', [ngRoute])
    .controller('CocktailDetailsController', CocktailDetailsController)
    .controller('HomeController', HomeController)
    .controller('CocktailListController', CocktailListController)
    .controller('TypeNavController', TypeNavController)
    .directive('ngTypes', TypeDirective)
    .directive('ngList',CocktailListDirective)
    .config(RouteConfig)
