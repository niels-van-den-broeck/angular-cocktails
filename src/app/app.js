//Necessary libs
import angular from 'angular'
import ngRoute from 'angular-route'
import ngRedux from 'ng-redux'
import 'jquery/dist/jquery.slim.min'
import 'bootstrap/dist/js/bootstrap.bundle'

//Directives
import TypeDirective from "./Components/TypeNav/TypeNavDirective";
import CocktailListDirective from "./Components/CocktailList/CocktailListDirective";
import FilterDropDownDirective from "./Components/Dropdowns/FilterDropDown/FilterDropDownDirective";
import TextDropDownDirective from "./Components/Dropdowns/TextDropDown/TextDropDownDirective";

//Controllers
import CocktailDetailsController from './Components/CocktailDetails/CocktailDetailsController'
import HomeController from './Components/Home/HomeController'
import CocktailListController from "./Components/CocktailList/CocktailListController";
import TypeNavController from "./Components/TypeNav/TypeNavController";
import UnknownController from "./Components/UnknownPage/UnknownController";
import FilterDropDownController from "./Components/Dropdowns/FilterDropDown/FilterDropDownController";
import TextDropDownController from "./Components/Dropdowns/TextDropDown/TextDropDownController";

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import './Components/CocktailDetails/CocktailDetails.css'

//Configs
import RouteConfig from "./Config/RouteConfig";
//import StoreConfig from "./Config/StoreConfig";

//Initialise module
const module = angular.module('app', [ngRoute, ngRedux])
    .controller('CocktailDetailsController', CocktailDetailsController)
    .controller('HomeController', HomeController)
    .controller('CocktailListController', CocktailListController)
    .controller('TypeNavController', TypeNavController)
    .controller('UnknownController', UnknownController)
    .controller('FilterDropDownController', FilterDropDownController)
    .controller('TextDropDownController', TextDropDownController)
    .directive('ngTypes', TypeDirective)
    .directive('ngList',CocktailListDirective)
    .directive('ngFilter',FilterDropDownDirective)
    .directive('ngDrop',TextDropDownDirective)
    .config(RouteConfig)
    //.config(StoreConfig)
