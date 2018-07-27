import CocktailListMarkup from './CocktailList.html'

const CocktailListDirective = () => {
    /* @ngInject */
    return{
        restrict : 'E',
        scope: {
          search: '@',
            type: '@',
        },
        template : CocktailListMarkup
    }
}

export default CocktailListDirective
