import { useState } from "react";
import NoteService from "@/services/note.service";
import { useNavigate } from "react-router";
import { Save } from "lucide-react";

function NewNote() {
  const noteService = new NoteService();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleCreateNote = async () => {
    if (!title.trim() && !content.trim()) {
      return;
    }
    const newNote = {
      title: title,
      content: content,
    };

    await noteService.createNote(newNote);
    navigate("/");
  };

  return (
    <div className="p-5 sm:p-8 flex flex-col overflow-hidden">
      <div className="flex justify-center">
        <button className="btn" onClick={handleCreateNote}>
          <Save></Save>Create new note
        </button>
      </div>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="w-full input input-ghost focus:outline-none" placeholder="Your title..." />
      <hr />
      <textarea type="text" value={content} onChange={(event) => setContent(event.target.value)} className="w-full h-128 resize-none input input-ghost focus:outline-none" placeholder="Type something here..." />
    </div>
  );
}

export default NewNote;
