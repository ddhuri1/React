import AuthReducer from './AuthReducer';
import ProjectReducer from './ProjectReducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
        auth : AuthReducer,
        project : ProjectReducer
})

export default RootReducer;