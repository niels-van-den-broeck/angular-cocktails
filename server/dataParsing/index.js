const replaceAll = (string, search, replacement) => {
    return string.replace(new RegExp(search, 'g'), replacement);
};

const parseCocktailDetails = (input) => {

     const details = input.reduce((acc, drink) => {
        return drink
    })
    let returnObject = {}
    const keys = Object.keys(details);
    const objArr = []

    keys.forEach((curr) => {
        if (curr.indexOf('Ingredient') > -1){
            const index = curr.substring('strIngredient'.length)
            const measure = keys[keys.indexOf('strMeasure' + index)]
            if(details[curr] !== '' && details[curr] !== null){
                objArr.push({[details[curr]]: details[measure]})
            }

        }else{
            if(curr.indexOf('Measure') === -1){
                returnObject[curr] = details[curr]
            }
        }

    })
    returnObject.ingredients = objArr;

    return returnObject

}

const parseCocktailTypes = (data) => {
    try{
        return JSON.parse(data).drinks.map((el) => {
            return {
                name: el.strCategory,
                remoteUrl: encodeURIComponent(el.strCategory),
                localUrl: replaceAll(el.strCategory,'\/', '&')
        }
        })
    }catch(err){
        return err
    }

}

const parseIngredients = (data) => {
    try{
        return JSON.parse(data).drinks.map((el) => {
            return el.strIngredient1
        })
    }catch(err){
        return err
    }

}

const parseCocktailsByCategory = (data) => {
    return data.map((el) => {
        return{
            name: el.strDrink,
            url: el.strDrinkThumb,
            id: el.idDrink,
        }
    })
}

module.exports = {
    parseCocktailTypes,
    parseCocktailsByCategory,
    replaceAll,
    parseCocktailDetails,
    parseIngredients
}
