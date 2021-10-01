import { AUTH_FAILURE, AUTH_SUCCESS } from './user.types';

export const authFailure = (payload) => {
    return {
        type: AUTH_FAILURE,
        payload,
    };
}

export const authSuccess = (payload) => {
    return {
        type: AUTH_SUCCESS,
        payload,
    };
}