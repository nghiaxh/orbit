import express from "express";
import NoteController from "../controllers/note.controller.js";

const router = express.Router();

router.route("/")
    .post(NoteController.create)
    .get(NoteController.findAll)
    .delete(NoteController.deleteAll);

router.route("/:id")
    .get(NoteController.findOne)
    .put(NoteController.update)
    .delete(NoteController.deleteOne);

export default router;