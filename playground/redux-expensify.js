import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = ({description = '', note ='', amount=0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }   
});
//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
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
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
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

store.subscribe(() => {
    console.log(store.getState());    
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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