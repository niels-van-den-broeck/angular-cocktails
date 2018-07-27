import Constants from './../../Constants/cocktails'
import request from 'superagent'

export const fetchCategories = () => {
    return dispatch => {
        return dispatch(
            request
                .get('http://localhost:8080/api/cocktailtypes')
                .then(res => {
                    return{
                        type: Constants.FETCH_CATEGORIES,
                        payload: res.data.cocktailTypes,
                    }

                })
                .catch(err => console.log(err))
        )
    }
}

export const fetchRandom = () => {
    return dispatch => {
        return dispatch(
            request
                .get('http://localhost:8080/api/random')
                .then(res => {
                    return{
                        type: Constants.FETCH_RANDOM,
                        payload: res.data.cocktails[0],
                    }

                })
                .catch(err => console.log(err)))
    }
}

export const fetchName = (name) => {
    return dispatch => {
        return dispatch(
            request
                .get(`http://localhost:8080/api/search/${name}`)
                .then(res => {
                    return{
                        type: Constants.FETCH_NAME,
                        payload: res.data.cocktails
                    }
                })
                .catch(err => console.log(err))
        )
    }
}

export const fetchDetails = (id) => {
    return dispatch => {
        return dispatch(
            request
                .get(`http://localhost:8080/api/cocktail/${id}`)
                .then(res => {
                    return{
                        type: Constants.FETCH_DETAILS,
                        payload: res.data.cocktail
                    }
                })
                .catch(err => console.log(err))
        )
    }
}

export const fetchByIngredient = (ingredient) => {
    return dispatch => {
        return dispatch(
            request
                .get(`http://localhost:8080/api/search/i/${ingredient}`)
                .then(res => {
                    return{
                        type: Constants.FETCH_BY_INGREDIENT,
                        payload: res.data.cocktails
                    }

                })
                .catch(err => console.log(err))
        )
    }
}

export const fetchIngredients = () => {
    return dispatch => {
        return dispatch(
            request
                .get('http://localhost:8080/api/ingredients')
                .then(res => {
                    return{
                        type: Constants.FETCH_INGREDIENTS,
                        payload: res.data.ingredients
                    }
                })
        )
    }
}

