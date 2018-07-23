app.controller('CocktailListController', ($scope, $http, $routeParams) => {

     $http.get('http://localhost:8080/api/cocktailtypes/' + $routeParams.id)
        .then(res => {
            $scope.cocktails = res.data.cocktails
        })
         .catch(err => console.log(err))
})


