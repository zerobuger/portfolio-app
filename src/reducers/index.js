import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import portfolioReducer from './portfolioReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    portfolios: portfolioReducer
});