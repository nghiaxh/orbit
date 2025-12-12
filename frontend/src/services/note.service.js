import ApiClient from "./api.service";

class NoteService {
    constructor(baseUrl = "/api/note") {
        this.api = ApiClient(baseUrl);
    }

    async getAllNotes() {
        return (await this.api.get("/")).data;
    }

    async createNote(data) {
        try {
            const response = await this.api.post("/", data);
            return response.data;
        } catch (error) {
            console.error("Error while creating note", error.response || error);
            throw error;
        }
    }

    async getNote(id) {
        return (await this.api.get(`/${id}`)).data;
    }

    async updateNote(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }

    async deleteNote(id) {
        return (await this.api.delete(`/${id}`)).data;
    }

    async deleteAllNotes() {
        return (await this.api.delete("/")).data;
    }
}

export default NoteService;