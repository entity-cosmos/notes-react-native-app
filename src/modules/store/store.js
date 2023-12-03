import {
    Action,
    ThunkAction,
    configureStore,
} from '@reduxjs/toolkit';
import { createNotesReducer, fetchNotesReducer } from '../notes/notesSlice';

const store = configureStore({
    reducer: {
        "notes/fetch": fetchNotesReducer,
        "notes/create": createNotesReducer,
    }
});

// root state export in js format
export const Rootstate = store.getState;
export const AppDispatch = store.dispatch;
export default store;