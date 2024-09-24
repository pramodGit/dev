import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunkMiddleware } from 'redux-thunk';
import { batchedSubscribe } from 'redux-batched-subscribe';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


export default () => {
  const store = legacy_createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
