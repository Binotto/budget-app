import {createStore, combineReducers} from 'redux';

//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE


//Expenses Reducer

const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        default: 
            return state;
    }
};

//Filter Reducer
//text => '', sortBy => 'date', startDate => undefined, endDate => undefined

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined

};

const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        default: 
            return state;
    }
};
//Store creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
        
    })
);

console.log(store.getState());

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