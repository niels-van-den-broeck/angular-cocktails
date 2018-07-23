const parseCocktailTypes = (data) => {
    try{
        return JSON.parse(data).drinks.map((el) => el.strCategory)
    }catch(err){
        return err
    }

}

const parseCocktailsByCategory = (data) => {
    return JSON.parse(data).drinks.map((el) => {
        return{
            name: el.strDrink,
            url: el.strDrinkThumb,
            id: el.idDrink,
        }
    })
}

module.exports = {
    parseCocktailTypes: parseCocktailTypes,
    parseCocktailsByCategory: parseCocktailsByCategory
}
