import {
    GET_INVOICES,
    GET_INVOICE_COUNT,
    ACTION_FAILURE,
} from './invoice.types';

const INITIAL_STATE = {
    invoices: {},
    invoiceCount: null,
    currentInvoice: {},
    error: '',
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
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
