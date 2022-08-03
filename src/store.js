import { createStore, combineReducers, applyMiddleware } from "redux";
import { todos, isLoading } from "./todos/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = {
    todos,
    isLoading,
}

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers(reducers) //puts our reducers into a form that we can pass to the createStore function
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () =>
    createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );