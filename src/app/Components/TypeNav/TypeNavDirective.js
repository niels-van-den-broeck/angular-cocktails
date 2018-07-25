//module.directive('ngTypes', () => {
//    return{
//        restrict : 'E',
//        templateUrl : 'Components/TypeNav/TypeNav.html'
//    }
//})

const TypeDirective = () => {
    return{
        restrict : 'E',
        template : require('./TypeNav.html')
    }
}

export default TypeDirective
