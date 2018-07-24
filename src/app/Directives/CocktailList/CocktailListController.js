app.controller('CocktailListController', ($scope, $http, $routeParams) => {

    if (!$routeParams.id){

        $http.get('http://localhost:8080/api/search/' + $routeParams.searched)
            .then(res => {
                $scope.cocktails = res.data.cocktails
            })
            .catch(err => $scope.error = true)
    } else{
        $http.get('http://localhost:8080/api/cocktailtypes/' + $routeParams.id)
            .then(res => {
                $scope.cocktails = res.data.cocktails
            })
            .catch(err => $scope.error = true)
    }

})


