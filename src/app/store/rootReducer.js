import {combineReducers} from 'redux';
import eventReducer from '../../components/events/eventReducer';
import modalReducer from '../common/modals/modalReducer';
import authReducer from '../../components/auth/authReducer';
import asyncReducer from '../async/asyncReducer';
import profileReducer from '../../components/profiles/profileReducer';
import {connectRouter} from 'connected-react-router';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    event: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    profile: profileReducer
})

export default rootReducer;