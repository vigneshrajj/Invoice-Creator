import {
    GET_INVOICES,
    GET_INVOICE_COUNT,
    ACTION_FAILURE,
} from './invoice.types';
import axios from 'axios';

const endpoint = (url) => {
    const apiUrl = 'http://localhost:3001/api';
    return apiUrl + url;
};

export const getAllInvoices = (payload) => async (dispatch, getState) => {
    try {
        const res = await axios.get(endpoint('/invoice/list'), {
            params: { ...payload, user: getState().user.user },
        });
        const invoices = await res.data.invoices;
        const count = await res.data.count;
        await dispatch({ type: GET_INVOICES, payload: invoices });
        dispatch({ type: GET_INVOICE_COUNT, payload: count });
    } catch (err) {
        dispatch({ type: ACTION_FAILURE, payload: err.response.data.error });
    }
};
