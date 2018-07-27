import UI from "./../Actions/Constants/uiconst";

const defaultState = {
    searchTerm: ''
}

export default (state, action={}) => {
    if (!state) state = defaultState
    switch(action.type){
        case UI.CHANGE_SEARCH:
            return{
                ...state,
                searchTerm: action.payload
            }
        default: {
            return state;
        }
    }
}
