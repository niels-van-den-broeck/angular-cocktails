export default class TextDropDownController{
    /* @ngInject */
    constructor($scope){
        this.scope = $scope;

    }
    /* @ngInject */
    $onInit = () => {
        this.scope.setValue = (value) => {
            this.scope.state.typeSearch = value

        }
    }


}
