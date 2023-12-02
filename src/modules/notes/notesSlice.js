import { createSlice } from "@reduxjs/toolkit"
import { fetch } from "./notesAction"


const fetchInitialState = {
    loading: false,
    error: null,
    data: []
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

export const fetchNotesReducer = fetchNotesSlice.reducer;