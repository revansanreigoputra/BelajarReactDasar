import Note from "./Note";
import { NoteContext } from "./NoteContext";
import { useContext } from "react";

export default function NoteList() {
    const notes = useContext(NoteContext);

    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Note note={note} />
                </li>
            ))}
        </ul>
    )

}