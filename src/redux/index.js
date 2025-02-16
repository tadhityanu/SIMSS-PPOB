import { applyMiddleware, createStore } from "redux"
import AllReducers from './reducer/index'
import { thunk } from "redux-thunk"
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";

const initialState = {}

const persistConfig = {
    key: "root", // Root key for persistence
    storage, // Use local storage
    whitelist: ["authReducer"], // Only persist auth state
};

const persistedReducer = persistReducer(persistConfig, AllReducers);

const store = createStore(persistedReducer, initialState, applyMiddleware(thunk))

const persistor = persistStore(store);

export { store, persistor };
