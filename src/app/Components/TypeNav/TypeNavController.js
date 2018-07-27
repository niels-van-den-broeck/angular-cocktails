export default class TypeNavController{
    /* @ngInject */
    constructor($scope, $http){
        this.$scope = $scope;
        this.$http = $http;
    }
    /* @ngInject */
    $onInit = () => {
        this.$http.get('http://localhost:8080/api/cocktailtypes')
            .then(res => {
                this.$scope.cocktailTypes = res.data.cocktailTypes

            })
            .catch(err => console.log(err));
    }


}

