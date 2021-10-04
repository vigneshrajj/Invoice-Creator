import {
    GET_INVOICES,
    GET_CURRENT_INVOICE,
    GET_INVOICE_COUNT,
    GET_STATS,
    GET_CHART_DATA,
    ACTION_FAILURE,
} from './invoice.types';

const INITIAL_STATE = {
    invoices: [],
    invoiceCount: null,
    currentInvoice: {},
    statInvoices: [],
    chartData: [],
    error: '',
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CURRENT_INVOICE:
            return {
                ...state,
                currentInvoice: action.payload,
            };
        case GET_INVOICES:
            return {
                ...state,
                invoices: action.payload,
            };
        case GET_INVOICE_COUNT:
            return {
                ...state,
                invoiceCount: action.payload,
            };
        case GET_STATS:
            return {
                ...state,
                statInvoices: action.payload,
            };
        case GET_CHART_DATA:
            return {
                ...state,
                chartData: action.payload,
            };
        case ACTION_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
