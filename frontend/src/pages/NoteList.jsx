import { useEffect, useState } from "react";
import NoteCard from "@/components/NoteCard";
import NoteService from "@/services/note.service";

const noteService = new NoteService();

function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
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

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <>
      <div className="p-5 sm:p-8">
        <div className="flex justify-center gap-4 mb-8">
          {/* Hiển thị danh sách notes */}
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NoteList;
