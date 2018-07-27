import HomeMarkup from "../Components/Home/Home.html";
import CocktailListMarkup from "../Components/CocktailList/CocktailList.html";
import CocktailDetailsMarkup from "../Components/CocktailDetails/CocktailDetails.html";
import Unknown from '../Components/UnknownPage/Unknown.html'
/* @ngInject */
const RouteConfig = ($routeProvider) => {
    $routeProvider
        .when('/', {
            template : HomeMarkup
        })
        .when("/types/:id", {
            template : CocktailListMarkup
        })
        .when("/search/:searched", {
            template : HomeMarkup

        })
        .when("/cocktails/:id", {
            template : CocktailDetailsMarkup
        })
        .otherwise({
            template : Unknown
        });
}

export default RouteConfig
