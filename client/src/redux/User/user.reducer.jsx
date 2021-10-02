import { AUTH_FAILURE, AUTH_SUCCESS } from './user.types';

const INITIAL_STATE = {
    user: '',
    errors: {},
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case AUTH_FAILURE:
            return {
                ...state,
                errors: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
