import UI from './../../Constants/uiconst'

export const changeSearch = (search) => {
    return{
        type: UI.CHANGE_SEARCH,
        payload: search
    }
}
