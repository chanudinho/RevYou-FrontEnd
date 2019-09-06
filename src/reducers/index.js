import { combineReducers } from 'redux';
import login from './login';
import project from './project';
import bases from './bases';

export default combineReducers({
    login,
    project,
    bases
})