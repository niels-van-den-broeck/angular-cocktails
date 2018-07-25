import CocktailListMarkup from './CocktailList.html'

const CocktailListDirective = () => {
    return{
        restrict : 'E',
        scope: {
          search: '@'
        },
        template : CocktailListMarkup
    }
}

export default CocktailListDirective
