import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://invoice-app-vignesh.herokuapp.com/api',
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
});

export const signup = (payload) => async (dispatch) => {
    try {
        const res = await instance.post('/signup', payload);
        const user = await res.data.user;
        dispatch({ type: 'AUTH_SUCCESS', payload: user });
    } catch (err) {
        dispatch({ type: 'AUTH_FAILURE', payload: err.response.data.errors });
    }
};

export const login = (payload) => async (dispatch) => {
    try {
        const res = await instance.post('/login', payload);
        const user = await res.data.user;
        dispatch({ type: 'AUTH_SUCCESS', payload: user });
    } catch (err) {
        dispatch({ type: 'AUTH_FAILURE', payload: err.response.data.errors });
    }
};

export const googleSignin = (payload) => async (dispatch) => {
    try {
        const res = await instance.post('/google-login', payload);
        const user = await res.data.user;
        dispatch({ type: 'AUTH_SUCCESS', payload: user });
    } catch (err) {
        dispatch({ type: 'AUTH_FAILURE', payload: err.response.data.error });
    }
};

export const logout = () => async () => {
    await instance.get('/logout');
};
