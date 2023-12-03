import { createAsyncThunk } from "@reduxjs/toolkit";
import { NotesService } from "./service/notesService";

export const fetch = createAsyncThunk(
    'notes/fetch',
    async () => {
        try {
            const service = new NotesService();
            const response = await service.getNotes();
            return response;
        }
        catch (error) {
            console.error(error);
        }
    }
)

export const create = createAsyncThunk(
    'notes/create',
    async (data) => {
        try {
            const service = new NotesService();
            const response = await service.createNotes(data);
            return response;
        }
        catch (error) {
            console.error(error);
        }
    }
)