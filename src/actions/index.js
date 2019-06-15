import portfolios from '../api/portfolios';
import history from '../history';
import { 
    SIGN_IN,
    SIGN_OUT,
    CREATE_PORTFOLIO, 
    FETCH_PORTFOLIOS,
    FETCH_PORTFOLIO, 
    DELETE_PORTFOLIO,
    EDIT_PORTFOLIO
} from './types';

// Auth action creator
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

// Portfolio action creator
export const createPortfolio = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await portfolios.post('/portfolios', { ...formValues, userId });

    dispatch({ type: CREATE_PORTFOLIO, payload: response.data });
    // Do some programmtic nagivation to
    // get the user back to the root route
    history.push('/');
};

export const fetchPortfolios = () => async dispatch => {
    const response = await portfolios.get('/portfolios');

    dispatch({ type: FETCH_PORTFOLIOS, payload: response.data });
};

export const fetchPortfolio = (id) => async dispatch => {
    const response = await portfolios.get(`/portfolios/${id}`);

    dispatch({ type: FETCH_PORTFOLIO, payload: response.data });
};

export const editPortfolio = (id, formValues) => async dispatch => {
    const response = await portfolios.patch(`/portfolios/${id}`, formValues);

    dispatch({ type: EDIT_PORTFOLIO, payload: response.data });
    history.push('/');
};

export const deletePortfolio = (id) => async dispatch => {
    await portfolios.delete(`/portfolios/${id}`);

    dispatch({ type: DELETE_PORTFOLIO, payload: id});
};