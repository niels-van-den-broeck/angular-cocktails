app.controller('CocktailDetailsController', function($scope, $http, $routeParams)  {

    $http.get(`http://localhost:8080/api/cocktail/${$routeParams.id}`)
        .then(res => {

            $scope.cocktail = res.data.cocktail
            console.log($scope.cocktail)
        })
        .catch(err => console.log(err))
})
