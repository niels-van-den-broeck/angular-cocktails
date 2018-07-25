export default class CocktailListController{
    constructor($scope, $http, $routeParams, $animate){
        this.$scope = $scope;
        this.$http = $http;
        this.$routeParams = $routeParams;
        this.loadData();
        this.$scope.$watch('search', () => {
            this.loadData()
        })
    }


    loadData = () => {
        if (!this.$routeParams.id){
            this.$http.get('http://localhost:8080/api/search/' + this.$scope.search)
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

    $onChange = (change) => {
        this.loadData()
    }
}

