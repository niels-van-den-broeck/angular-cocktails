app.controller('HomeController',($scope, $http, $routeParams, $location) => {
    $scope.searchVal = ''
    $scope.found = !!$routeParams.searched;
    console.log($scope.found)
    $scope.go = ( path ) => {
        $location.path( path );
    };
    $scope.submit = () => {

        $scope.go(`/search/${$scope.searchVal}`)
    }

})
