export default class FilterDropDownController{
    constructor($scope){
        this.scope = $scope;

    }
    $onInit = () => {
        this.scope.search = ''
        this.scope.results = this.scope.props
        this.scope.value = undefined
        this.scope.refreshData = () => {
            this.scope.results = this.scope.props.filter((el) => {
                return el.toLowerCase().indexOf(this.scope.search.toLowerCase()) > -1
            })
        }
        this.scope.setValue = (value) => {
            this.scope.state.searchVal = value
        }
    }
}
