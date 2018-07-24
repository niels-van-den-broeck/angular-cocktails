app.controller('HomeController',($scope, $http, $location) => {
    $scope.searchVal = ''
    $scope.go = ( path ) => {
        $location.path( path );
    };
    $scope.submit = () => {
        $scope.go(`/search/${$scope.searchVal}`)
    }
})
