import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";
import { NoteContext, NotesDispatchContext } from "./NoteContext";

let id = 0;
const initialNotes = [
    {id: id++, text: "Belajar React Dasar", done: true},
    {id: id++, text: "Mengerjakan tugas React Dasar", done: false},
    {id: id++, text: "Mengerjakan tugas React Dasar", done: false},
    {id: id++, text: "Mengerjakan tugas React Dasar", done: false},
    {id: id++, text: "Mengerjakan tugas React Dasar", done: false}
];

function notesReducer(notes, action) {
    if(action.type === "ADD_NOTE") {
        notes.push({
            id: id++,
            text: action.text,
            done: false
        });
    } else if(action.type === "CHANGE_NOTE") {
        const index = notes.findIndex(note => note.id === action.id);
        notes[index] = {
            text: action.text,
            done: action.done
        };
    } else if(action.type === "DELETE_NOTE") {
        const index = notes.findIndex(note => note.id === action.id);
        notes.splice(index, 1);
    }

}


export default function NoteApp() {

    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

    return (
        <div>
            <NoteContext.Provider value={notes}>  
                <NotesDispatchContext.Provider value={dispatch}>
                    <h2>Note App</h2>
                    <NoteForm />
                    <NoteList />
                </NotesDispatchContext.Provider>  
            </NoteContext.Provider>
        </div>
    )

}
