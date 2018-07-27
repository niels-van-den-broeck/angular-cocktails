import TextDropDownMarkup from './TextDropdown.html'

const TextDropDownDirective = () => {
    /* @ngInject */
    return{
        restrict : 'E',
        scope: {
            props: '=',
            state: '=',
        },
        template : TextDropDownMarkup
    }
}

export default TextDropDownDirective
