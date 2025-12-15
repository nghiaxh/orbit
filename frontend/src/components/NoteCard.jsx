function NoteCard({ note, onClick }) {
  return (
    <>
      <article onClick={onClick} className="w-full overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg cursor-pointer">
        <div className="bg-white p-4 sm:p-6">
          <h3 className="mt-0.5 text-lg text-gray-900">{note.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">{note.content}</p>
          <time className="mt-2 block text-xs text-gray-400">
            {(note.updatedAt.toString().slice(0,10))}
          </time>
        </div>
      </article>
    </>
  );
}

export default NoteCard;
