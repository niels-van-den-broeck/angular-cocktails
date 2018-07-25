import CocktailListMarkup from './CocktailList.html'

const CocktailListDirective = () => {
    return{
        restrict : 'E',
        template : CocktailListMarkup
    }
}

export default CocktailListDirective
