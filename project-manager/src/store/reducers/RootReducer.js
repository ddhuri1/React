import AuthReducer from './AuthReducer';
import ProjectReducer from './ProjectReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';

const RootReducer = combineReducers({
        auth : AuthReducer,
        project : ProjectReducer,
        firestore: firestoreReducer
})

export default RootReducer;