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

        })
    );
    return store;
};