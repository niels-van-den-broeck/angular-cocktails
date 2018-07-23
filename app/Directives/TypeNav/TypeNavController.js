app.controller('TypeNavController', ($scope, $http) => {

     $http.get('http://localhost:8080/api/cocktailtypes')
        .then(res => {
            console.log(res)
            $scope.cocktailTypes = res.data.cocktailTypes
        })
         .catch(err => console.log(err))
    $scope.add = function () {
        var el = $compile()( $scope );
        $element.parent().append( el );
    };
})


