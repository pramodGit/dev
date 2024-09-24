import { combineReducers, legacy_createStore } from "redux";
import { v4 as uuidv4 } from 'uuid';

const addExpense = ( 
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {} 
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});
const removeExpense = ( { id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expensesReducerState = [];
const expensesReducer = ( state = expensesReducerState, action ) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(( { id } ) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};
const filterReducersDefaultState = {
    text: 'rent',
    sortBy: amount,
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducersDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
const expenseOne = store.dispatch(addExpense({description : 'rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description : 'coffee', amount: 300}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 200 }));

const demoState = {
    expenses: [
        {
            id: 1,
            description: "demo state description of expense 1",
            note: "this is the note for expense 1",
            amount: 651200,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: amount,
        startDate: undefined,
        endDate: undefined
    }
};
const store = legacy_createStore(combineReducers({
    expenses: expensesReducer
}));

const user = {
    name: "Kumar",
    age: 46
};
console.log({
    age: 27,
    ...user,
    location: 'delhi'
});




//console.log(store.getState());