import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters'
import { Stream } from 'stream';

export default () => {
    //Store creation
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filtersReducer

        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
    return store;
};