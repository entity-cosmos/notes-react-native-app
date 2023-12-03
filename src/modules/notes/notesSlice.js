import { createSlice } from "@reduxjs/toolkit"
import { create, fetch } from "./notesAction"


const fetchInitialState = {
    loading: false,
    error: null,
    data: []
}

const createInitialState = {
    loading: false,
    error: null,
    data: {}
}

export const fetchNotesSlice = createSlice({
    name: 'notes/fetch',
    initialState: fetchInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetch.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetch.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
})

export const createNotesSlice = createSlice({
    name: 'notes/create',
    initialState: createInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(create.pending, (state) => {
                state.loading = true;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(create.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
})

export const fetchNotesReducer = fetchNotesSlice.reducer;
export const createNotesReducer = createNotesSlice.reducer;