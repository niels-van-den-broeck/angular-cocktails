import CocktailListMarkup from './CocktailList.html'

const CocktailListDirective = () => {
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
