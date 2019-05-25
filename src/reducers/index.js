import { combineReducers } from 'redux';
import samplePortfolios from '../mockdata/samplePortfolios';

// Reducer 1
const portfoliosReducer = () => {
    return samplePortfolios;
};

// Reducer 2
const selectedPortfolioReducer = (selectedPortfolio=null, action) => {
    if(action.type === 'PORTFOLIO_SELECTED'){
        return action.payload;
    }

    return selectedPortfolio;
};

export default combineReducers({
    portfolios: portfoliosReducer,
    selectedPortfolio: selectedPortfolioReducer
})