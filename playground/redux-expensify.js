import {createStore, combineReducers} from 'redux';

const demoState = {
    expense: [{
        id: 'chakalsuhaskmehtk',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 77500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};