import axios from 'axios';

const endpoint = (url) => {
    const apiUrl = 'http://localhost:3001/api';
    return apiUrl + url;
};

export const signup = (payload) => async (dispatch) => {
    try {
        const res = await axios.post(endpoint('/signup'), payload, {
            headers: {
                'content-type': 'application/json',
            },
            withCredentials: true,
        });
        const user = await res.data.user;
        dispatch({ type: 'AUTH_SUCCESS', payload: user });
    } catch (err) {
        dispatch({ type: 'AUTH_FAILURE', payload: err.response.data.errors });
    }
};

export const login = (payload) => async (dispatch) => {
    try {
        const res = await axios.post(endpoint('/login'), payload, {
            headers: {
                'content-type': 'application/json',
            },
            withCredentials: true,
        });
        const user = await res.data.user;
        dispatch({ type: 'AUTH_SUCCESS', payload: user });
    } catch (err) {
        dispatch({ type: 'AUTH_FAILURE', payload: err.response.data.errors });
    }
};

export const googleSignin = (payload) => async (dispatch) => {
    try {
        const res = await axios.post(endpoint('/google-login'), payload, {
            headers: {
                'content-type': 'application/json',
            },
            withCredentials: true,
        });
        const user = await res.data.user;
        dispatch({ type: 'AUTH_SUCCESS', payload: user });
    } catch (err) {
        dispatch({ type: 'AUTH_FAILURE', payload: err.response.data.error });
    }
};

export const logout = () => async () => {
    await axios.get(endpoint('/logout'), {
        withCredentials: true,
    });
};
