import Banner from './../../res/Mumbai-blog-banner-1400x400px.jpg'

export default class HomeController {
    constructor($scope, $http, $location){
        this.scope = $scope;
        this.http = $http;
        this.location = $location
    }

    loadIngredients = () => {
        this.http.get('http://localhost:8080/api/ingredients')
            .then(res => {
                this.scope.ingredients = res.data.ingredients;
            })
    }

    $onInit = () => {
        this.loadIngredients()
        this.scope.imageLink = Banner
        this.scope.options = [
            'Name',
            'Ingredient'
        ]
        this.scope.state={
            searchVal : '',
            typeSearch: this.scope.options[0],
            found : false,
        }


        this.scope.change = () => {
            if(this.scope.state.searchVal !== ''){
                this.scope.state.found = true;
            }else{
                this.scope.state.found = false
            }
        }

        this.scope.getRandom = () => {
            this.http.get('http://localhost:8080/api/random')
                .then(res => {
                    this.location.path(`/cocktails/${res.data.cocktails[0].id}`)
                })
                .catch(err => this.$scope.error = true)
        }

    }


}
