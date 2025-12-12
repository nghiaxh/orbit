import NoteService from "../services/note.service.js";

const noteService = new NoteService();

export async function create(req, res, next) {
    if (!req.body?.title) {
        return next(new Error("Note title cannot be empty"));
    }

    try {
        const document = await noteService.create(req.body);
        return res.status(201).json({ message: "Note created successfully" }, document);
    } catch (error) {
        console.log(error);
        return next(new Error("Error while creating book"));
    }
}

export async function findAll(req, res, next) {
    let documents = [];

    try {
        const { title } = req.query;
        if (title) {
            documents = await noteService.findByName(title);
        } else {
            documents = await noteService.find({});
        }
    } catch (error) {
        console.log(error);
        return next(new Error("An error occurred while retrieving the list of books"));
    }
    return res.json(documents);
};

export async function findOne(req, res, next) {
    try {
        const document = await noteService.findById(req.params.id);
        if (!document) {
            return next(new Error("Note not found"));
        }
        return res.json(document);
    } catch (error) {
        console.log(error);
        return next(new Error(`Error while retrieving note with id ${req.params.id}`));
    }
};

export async function update(req, res, next) {
    if (Object.keys(req.body).length === 0) {
        return next(new Error("Data to update cannot be empty"));
    }

    try {
        const document = await noteService.update(req.params.id, req.body);

        if (!document) {
            return next(new Error("Note not found"));
        }

        return res.send({ message: "Note updated successfully" }, document);
    } catch (error) {
        console.log(error);
        return next(new Error(`Error while updating book with id ${req.params.id}`));
    }
};

export async function deleteOne(req, res, next) {
    try {
        const document = await noteService.delete(req.params.id);
        if (!document) {
            return next(new Error("Book not found"));
        }
        return res.json({ message: "Book deleted successfully" });
    } catch (error) {
        console.log(error);
        return next(new Error(`Could not delete book with id ${req.params.id}`));
    }
};

export async function deleteAll(req, res, next) {
    try {
        const deleteCount = await noteService.deleteAll();
        return res.json({ message: `${deleteCount} books were deleted successfully` });
    } catch (error) {
        console.log(error);
        return next(new Error("An error occurred while deleting all books"));
    }
};

export default {
    create, findAll, findOne, update, deleteOne, deleteAll,
};