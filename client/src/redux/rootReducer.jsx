import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
import invoiceReducer from './Invoice/invoice.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    invoice: invoiceReducer,
});

export default rootReducer;
