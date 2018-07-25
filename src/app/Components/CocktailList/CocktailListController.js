//app.controller('CocktailListController', function($scope, $http, $routeParams) {
//    $scope.cocktails = [];
//    this.$onInit = () => {
//        if (!$routeParams.id){
//
//            $http.get('http://localhost:8080/api/search/' + $routeParams.searched)
//                .then(res => {
//                    $scope.cocktails = res.data.cocktails
//                })
//                .catch(err => $scope.error = true)
//        } else{
//            $http.get('http://localhost:8080/api/cocktailtypes/' + $routeParams.id)
//                .then(res => {
//                    $scope.cocktails = res.data.cocktails
//                })
//                .catch(err => $scope.error = true)
//        }
//    }
//
//
//
//})

export default class CocktailListController{
    constructor($scope, $http, $routeParams){
        this.$scope = $scope;
        this.$http = $http;
        this.$routeParams = $routeParams
    }

    $onInit = () => {
        if (!this.$routeParams.id){

            this.$http.get('http://localhost:8080/api/search/' + this.$routeParams.searched)
                .then(res => {
                    this.$scope.cocktails = res.data.cocktails
                })
                .catch(err => this.$scope.error = true)
        } else{
            this.$http.get('http://localhost:8080/api/cocktailtypes/' + this.$routeParams.id)
                .then(res => {
                    this.$scope.cocktails = res.data.cocktails
                })
                .catch(err => this.$scope.error = true)
        }
    }

}

