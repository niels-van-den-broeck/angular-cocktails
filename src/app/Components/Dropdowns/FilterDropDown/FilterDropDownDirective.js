import FilterDropDownMarkup from './FilterDropdown.html'

const FilterDropDownDirective = () => {
    return{
        restrict : 'E',
        scope: {
            props: '=',
            state: '='
        },
        template : FilterDropDownMarkup
    }
}

export default FilterDropDownDirective
