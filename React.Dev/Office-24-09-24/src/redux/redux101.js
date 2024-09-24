import { legacy_createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const reducer = (state = { count: 0 }, action) => {
    console.log("Running");
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};
const store = legacy_createStore(reducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Action is an Object
store.dispatch({
    type: "INCREMENT",
    incrementBy: 5
});

//unsubscribe();

store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch({type: "RESET"});
store.dispatch(decrementCount({ decrementBy: 10}));
store.dispatch({
    type: "SET",
    count: 101
});




this.setState((prevState) => {
    return prevState;
});