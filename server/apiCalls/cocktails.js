const request = require('superagent');

const getCocktailsByType = (type) => {
    return new Promise((resolve, reject) => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + type;

        request
            .get(url)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })

}

module.exports = {
    getCocktailsByType: getCocktailsByType
}
