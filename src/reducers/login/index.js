import {LOGIN, LOGOUT} from './actions';

export default (state= {}, action ) => {
    switch (action.type) {
        case LOGIN:
            return {
                email: action.email
            }
        case LOGOUT:
            return {};
        default:
            return state;
    }
}