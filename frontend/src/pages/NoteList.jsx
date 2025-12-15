import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NoteCard from "@/components/NoteCard";
import NoteService from "@/services/note.service";

function NoteList() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  const goToNoteDetail = (noteId) => {
    navigate(`/note/${noteId}`);
  };

  useEffect(() => {
    const noteService = new NoteService();
    async function fetchNotes() {
      try {
        const response = await noteService.getAllNotes();
        setNotes(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchNotes();
  }, []);

  return (
    <>
      <div className="p-5 sm:p-8">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {/* Note list */}
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} onClick={() => goToNoteDetail(note._id)} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NoteList;
