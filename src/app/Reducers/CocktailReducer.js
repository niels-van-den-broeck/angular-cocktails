import Constants from './../Actions/Constants/cocktails'

const defaultState = {
    cocktailTypes:[],
    ingredients:[],
    currentCocktail: {},
    cocktails: []
}

export default (state, action={}) => {
    if(!state) state = defaultState

    switch(action.type){
        case Constants.FETCH_CATEGORIES:
            return{
                ...state,
                cocktailTypes: [...action.payload]
            }
        case Constants.FETCH_INGREDIENTS:
            return{
                ...state,
                ingredients: [...action.payload]
            }
        case Constants.FETCH_NAME:
            return{
                ...state,
                cocktails: [...action.payload]
            }
        case Constants.FETCH_BY_INGREDIENT:
            return{
                ...state,
                cocktails: [...action.payload]
            }
        case Constants.FETCH_DETAILS:
            return{
                ...state,
                currentCocktail: {
                    ...action.payload
                }
            }
        case Constants.FETCH_RANDOM:
            return{
                ...state,
                currentCocktail: {
                    ...action.payload
                }
            }
        default: {
            return state
        }
    }
}
