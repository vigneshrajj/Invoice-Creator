import {
    GET_INVOICES,
    GET_CURRENT_INVOICE,
    GET_INVOICE_COUNT,
    GET_STATS,
    GET_CHART_DATA,
    SEARCH_INVOICE,
    GET_ALL_CLIENTS,
    ACTION_FAILURE,
} from './invoice.types';
import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/api/invoice',
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
});

export const createInvoice = (payload) => async (dispatch) => {
    try {
        const res = await instance.post('/', payload);
        const message = await res.data.message;
    } catch (err) {
        dispatch({ type: ACTION_FAILURE, payload: err.response.data.errors });
    }
};

export const getInvoice = (payload) => async (dispatch) => {
    try {
        const res = await instance.get('/' + payload);
        const invoice = await res.data.invoice;
        await dispatch({ type: GET_CURRENT_INVOICE, payload: invoice });
    } catch (err) {
        dispatch({ type: ACTION_FAILURE, payload: err.response.data.error });
    }
};

export const getAllInvoices = (payload) => async (dispatch) => {
    try {
        const res = await instance.get('/list', {
            params: payload,
        });
        const invoices = await res.data.invoices;
        const count = await res.data.count;
        await dispatch({ type: GET_INVOICES, payload: invoices });
        dispatch({ type: GET_INVOICE_COUNT, payload: count });
    } catch (err) {
        dispatch({ type: ACTION_FAILURE, payload: err.response.data.error });
    }
};

export const getStats = () => async (dispatch) => {
    try {
        const res = await instance.get('/stats');
        const statInvoices = await res.data.statInvoices;
        const chartData = await res.data.chartData;
        dispatch({ type: GET_STATS, payload: statInvoices });
        dispatch({ type: GET_CHART_DATA, payload: chartData });
    } catch (err) {
        dispatch({ type: ACTION_FAILURE, payload: err.response.data.error });
    }
};

export const editInvoice = (payload) => async (dispatch) => {
    try {
        const res = await instance.patch('/' + payload.id, {
            updatedValues: payload.editedValues,
        });
    } catch (err) {
        dispatch({ type: ACTION_FAILURE, payload: err.response.data.error });
    }
};

export const deleteInvoice = (payload) => async (dispatch) => {
    try {
        const res = await instance.delete('/' + payload);
    } catch (err) {
        dispatch({ type: ACTION_FAILURE, payload: err.response.data.error });
    }
};

export const searchInvoice = (payload) => async (dispatch) => {
    try {
        const res = await instance.get('/search', {
            params: { searchString: payload },
        });
        const invoices = await res.data.invoices;
        dispatch({ type: SEARCH_INVOICE, payload: invoices });
    } catch (err) {
        dispatch({ type: ACTION_FAILURE, payload: err.response.data.error });
    }
};

export const getClients = () => async (dispatch) => {
    try {
        const res = await instance.get('/clients');
        dispatch({ type: GET_ALL_CLIENTS, payload: res.data.clients });
    } catch (err) {
        dispatch({ type: ACTION_FAILURE, payload: err.response.data.error });
    }
};

export const applyFilter = (payload) => async (dispatch) => {
    try {
        const res = await instance.get('/filters', {
            params: {
                status: payload.status && payload.status,
                dateAdded: payload.dateAdded && payload.dateAdded,
            },
        });
        dispatch({ type: SEARCH_INVOICE, payload: res.data.invoices });
    } catch (err) {
        dispatch({ type: ACTION_FAILURE, payload: err.response.data.error });
    }
};
