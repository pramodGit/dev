import { takeEvery, put, call } from "redux-saga/effects";
import * as actions from "../actions";

// Simulate an API call
const fetchDataFromAPI = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

function* fetchData() {
    try {
        const data = yield call(fetchDataFromAPI);
        yield put(actions.fetchDataSuccess(data));
    } catch (error) {
        yield put(actions.fetchDataFailure(error.message));
    }
}

export function* watchFetchData() {
    yield takeEvery("FETCH_DATA_REQUEST", fetchData);
}