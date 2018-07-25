export default class CocktailDetailsController {
    constructor($scope, $http, $routeParams){
        this.$scope = $scope
        this.$http = $http
        this.$routeParams = $routeParams
        this.loadData();
    }

    loadData = () => {
        this.$scope.cocktail = {}

        this.$http.get(`http://localhost:8080/api/cocktail/${this.$routeParams.id}`)
            .then(res => {

                this.$scope.cocktail = res.data.cocktail
                console.log(this.$scope.cocktail)
            })
            .catch(err => console.log(err))
    }
}
