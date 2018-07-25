//app.controller('HomeController',function($scope, $http, $routeParams, $location) {
//
//    $scope.state={
//        searchVal : !$routeParams.searched || $routeParams.searched === '' ? '' : $routeParams.searched,
//        found : !!$routeParams.searched,
//    }
//
//    $scope.go = ( path ) => {
//        $location.path( path );
//    };
//
//    $scope.submit = () => {
//        if($scope.state.searchVal !== ''){
//            $scope.go(`/search/${$scope.state.searchVal}`);
//        }else{
//            $scope.go(`/`);
//        }
//
//    }
//
//    $scope.change = () => {
//        if($scope.searchVal !== ''){
//            $scope.go(`/search/${$scope.state.searchVal}`);
//        }else{
//            $scope.go(`/`);
//        }
//    }
//
//
//
//});

import Banner from './../../res/Mumbai-blog-banner-1400x400px.jpg'

export default class HomeController {
    constructor($scope, $routeParams, $location){
        this.$scope = $scope;

        this.$routeParams = $routeParams;
        this.$location = $location;
    }

    $onInit = () => {
        this.$scope.imageLink = Banner
        this.$scope.go = ( path ) => {
            this.$location.path( path );
        };

        this.$scope.state={
            searchVal : !this.$routeParams.searched || this.$routeParams.searched === '' ? '' : this.$routeParams.searched,
            found : !!this.$routeParams.searched,
        }

        this.$scope.change = () => {
            if(this.$scope.state.searchVal !== ''){
                this.$scope.go(`/search/${this.$scope.state.searchVal}`);
            }else{
                this.$scope.go(`/`);
            }
        }
    }
}
