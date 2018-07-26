export default class CocktailListController{
    constructor($scope, $http, $routeParams){
        this.$scope = $scope;
        this.$http = $http;
        this.$routeParams = $routeParams;
        this.loadData();
        this.$scope.$watch('[search,type]', () => {
            this.loadData()
        })
    }


    loadData = () => {
        if (!this.$routeParams.id){
            console.log(this.$scope.type)
            if (this.$scope.type === 'Name' || this.$scope.type ===''){
                this.$http.get('http://localhost:8080/api/search/' + this.$scope.search)
                    .then(res => {
                        this.$scope.cocktails = res.data.cocktails

                    })
                    .catch(err => this.$scope.error = true)
            }else if(this.$scope.type === 'Ingredient'){
                this.$http.get('http://localhost:8080/api/search/i/' + this.$scope.search)
                    .then(res => {
                        this.$scope.cocktails = res.data.cocktails

                    })
                    .catch(err => this.$scope.error = true)
            }

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

