const request = require('superagent');
const {replaceAll} = require('./../dataParsing')

const getCocktailsByName = (name) => {
    return new Promise((resolve, reject) => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
        request
            .get(url)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const getCocktailById = (id) => {
    return new Promise((resolve, reject) => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        request
            .get(url)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const getCocktailsByType = (type) => {
    return new Promise((resolve, reject) => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + encodeURIComponent(replaceAll(type,'&','/'));
        request
            .get(url)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })

}

const getCocktailsByIngredient = (ingredient) => {
    return new Promise ((resolve, reject) => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient
        request
            .get(url)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

module.exports = {
    getCocktailsByType: getCocktailsByType,
    getCocktailById: getCocktailById,
    getCocktailsByName: getCocktailsByName,
    getCocktailsByIngredient: getCocktailsByIngredient,
}
