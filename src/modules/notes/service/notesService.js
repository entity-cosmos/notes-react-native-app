import axois from 'axios';
import { getHeader } from '../../../utils/utils';

export class NotesService {
    constructor() {
        this.baseUrl = 'https://node-sample-lime.vercel.app/notes';
    }

    async getNotes() {
        try {
            const header = getHeader();
            const url = `${this.baseUrl}/list`;
            const response = await axois.get(url, {
                headers: header
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async createNotes(note) {
        try {
            const url = `${this.baseUrl}/create`;
            const header = getHeader();
            const response = await axois.post(url, note, {
                headers: header
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async updateNotes(note) {
        try {
            const url = `${this.baseUrl}/update/${note.id}`;
            const header = getHeader();
            const response = await axois.patch(url, note, {
                headers: header
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async deleteNotes(note) {
        try {
            const url = `${this.baseUrl}/delete/${note}`;
            const header = getHeader();
            const response = await axois.delete(url, {
                headers: header
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}