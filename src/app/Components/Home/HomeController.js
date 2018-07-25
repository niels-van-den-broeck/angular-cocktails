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
                this.$scope.state.found = true;

            }else{
                this.$scope.state.found = false
            }
        }
    }
}
