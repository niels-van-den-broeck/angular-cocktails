//app.controller('CocktailDetailsController', function($scope, $http, $routeParams)  {
//    $scope.cocktail = {}
//    this.$onInit = () => {
//        $http.get(`http://localhost:8080/api/cocktail/${$routeParams.id}`)
//            .then(res => {
//
//                $scope.cocktail = res.data.cocktail
//                console.log($scope.cocktail)
//            })
//            .catch(err => console.log(err))
//    }
//
//
//})

export default class CocktailDetailsController {
    constructor($scope, $http, $routeParams){
        this.$scope = $scope
        this.$http = $http
        this.$routeParams = $routeParams

    }

    $onInit = () => {
        this.$scope.cocktail = {}

        this.$http.get(`http://localhost:8080/api/cocktail/${this.$routeParams.id}`)
            .then(res => {

                this.$scope.cocktail = res.data.cocktail
                console.log(this.$scope.cocktail)
            })
            .catch(err => console.log(err))
    }
}
