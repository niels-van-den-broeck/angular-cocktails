export default class TextDropDownController{
    constructor($scope){
        this.scope = $scope;

    }

    $onInit = () => {
        this.scope.setValue = (value) => {
            this.scope.state.typeSearch = value

        }
    }


}
