app.controller('TypeNavController', ($scope, $http) => {
    $http.get('http://localhost:8080/api/cocktailtypes')
        .then(res => {
            $scope.cocktailTypes = res.data.cocktailTypes

        })
         .catch(err => console.log(err));

})


