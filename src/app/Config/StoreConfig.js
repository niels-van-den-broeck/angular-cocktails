import RootReducer from './../Reducers'
import ReduxThunk from 'redux-thunk'


export default ($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(RootReducer,[ReduxThunk])

}
