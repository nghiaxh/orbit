import Note from "../models/note.model.js";

class NoteService {
    async create(payload) {
        try {
            const note = new Note({
                title: payload.title,
                content: payload.content,
                tags: payload.tags,
            });
            Object.keys(note).forEach(key => {
                if (note[key] === undefined) {
                    delete note[key];
                }
            });
            return await note.save();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async find(filter) {
        return await Note.find(filter)
    }

    async findById(id) {
        return await Note.findOne({ _id: id })
    }

    async update(id, payload) {
        Object.keys(payload).forEach(key => {
            if (payload[key] === undefined || payload[key] === "" || payload[key] === null) {
                delete payload[key];
            }
        });

        const result = await Note.findByIdAndUpdate(
            id, { $set: payload }, { new: true, runValidators: true }
        );
        return result;
    }

    async delete(id) {
        const result = await Note.findByIdAndDelete(id);
        return result;
    }

    async deleteAll() {
        const result = await Note.deleteMany({});
        return result.deletedCount;
    }
}

export default NoteService;