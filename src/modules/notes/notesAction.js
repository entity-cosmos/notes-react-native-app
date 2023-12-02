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