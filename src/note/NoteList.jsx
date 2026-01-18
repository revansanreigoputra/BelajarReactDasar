import Note from "./Note";
import { NoteContext } from "./NoteContext";
import { useContext, useMemo, useRef } from "react";
import { useState } from "react";

export default function NoteList() {
    const notes = useContext(NoteContext);
    const [search, setSearch] = useState("");
    const searchInput = useRef(null);

    const filteredNotes = useMemo(() => {
        console.info("Filtering notes based on search:");
        return notes.filter(note => note.text.includes(search));
    }, [notes, search]);

    function handleSearch() {
        console.info("Search Button Clicked");
        setSearch(searchInput.current.value);
    }

    return (
        <div>
            <input ref={searchInput} type="text" placeholder="Search Notes"/>
            <button onClick={handleSearch}>Search</button>
            <ul>
                {filteredNotes.map(note => (
                    <li key={note.id}>
                        <Note note={note} />
                    </li>
                ))}
            </ul>
        </div>
    )

}