const request = require('superagent');
const {replaceAll} = require('./../dataParsing')

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

module.exports = {
    getCocktailsByType: getCocktailsByType,
    getCocktailById: getCocktailById
}
