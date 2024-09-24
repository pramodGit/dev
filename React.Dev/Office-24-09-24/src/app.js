import React from "react";
import { Provider } from 'react-redux';
import AppRouter from "./routers/router.js";
import configureStore from "./redux/store/configureStore.js";
import { addExpense } from './redux/actions/expenses.js';
import { setTextFilter } from './redux/actions/filters.js';
import getVisibleExpenses from './redux/selectors/expenses.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
//store.dispatch(setTextFilter('Gas'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

export default function AppComponent () {
    return (
        <>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </>
    );
}