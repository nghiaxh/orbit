import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Save, Trash } from "lucide-react";
import NoteService from "@/services/note.service";

const noteService = new NoteService();

function NoteDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const noteId = params.noteId;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchNoteDetail = async () => {
      const response = await noteService.getNote(noteId);
      const noteData = response;
      setTitle(noteData.title);
      setContent(noteData.content);
    };
    fetchNoteDetail();
  }, [noteId]);

  const updatedNote = {
    title: title,
    content: content,
  };

  const handleUpdateNote = async (noteId, updatedNote) => {
    await noteService.updateNote(noteId, updatedNote);
    navigate("/");
  };

  const handleDeleteNote = async (noteId) => {
    if (confirm("Delete this note?")) {
      await noteService.deleteNote(noteId);
      navigate("/");
    }
  };

  return (
    <div className="p-5 sm:p-8 flex flex-col overflow-hidden">
      <div className="flex justify-center gap-4">
        <button className="btn" onClick={() => handleUpdateNote(noteId, updatedNote)}>
          <Save></Save>Save this note
        </button>
        <button className="btn" onClick={() => handleDeleteNote(noteId)}>
          <Trash></Trash>Delete this note
        </button>
      </div>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="w-full input input-ghost focus:outline-none" placeholder="Your title..." />
      <hr />
      <textarea type="text" value={content} onChange={(event) => setContent(event.target.value)} className="w-full h-96 resize-none input input-ghost focus:outline-none" placeholder="Type something here..." />
    </div>
  );
}

export default NoteDetail;
