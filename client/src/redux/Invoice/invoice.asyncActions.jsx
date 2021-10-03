import {
    GET_INVOICES,
    GET_INVOICE_COUNT,
    GET_STATS,
    GET_CHART_DATA,
    ACTION_FAILURE,
} from './invoice.types';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/invoice',
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
});

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
