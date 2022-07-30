import { createStore } from "redux";
import { legacy_createStore, combineReducers } from "redux";
import { todos } from "./todos/reducers";

const reducers = {
    todos,
}

const rootReducer = combineReducers(reducers) //puts our reducers into a form that we can pass to the createStore function

export const configureStore = () => createStore(rootReducer);