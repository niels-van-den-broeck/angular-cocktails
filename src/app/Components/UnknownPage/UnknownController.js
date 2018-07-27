import Image from './../../res/BAR_FIGHT_V007.jpg'

export default class UnknownController{
    /* @ngInject */
    constructor($scope){
        this.$scope = $scope;
        this.$scope.imageLink = Image;
    }
}
