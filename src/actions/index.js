// Action creator
export const selectPortfolio = (portfolio) => {
    // Return an action
    return {
        type: 'PORTFOLIO_SELECTED',
        payload: portfolio
    };
};