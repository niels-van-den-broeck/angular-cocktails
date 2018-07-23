const request = require('superagent')

const getCocktailTypes = () => {
    return new Promise((resolve, reject) => {
        request
            .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

module.exports = {
    getCocktailTypes: getCocktailTypes,
}
