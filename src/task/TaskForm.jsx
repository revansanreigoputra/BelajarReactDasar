import { useState } from "react";
import "./Task.css";

export default function TaskForm({ setItems }) {
    const [item, setItem] = useState("");
    
        function handleChange(e) {
            setItem(e.target.value);
        }
    
        function handleClick(e) {
            e.preventDefault();
            setItems((draft) => {
                draft.push(item);
            });
            setItem("");
        }
    
        return (
            <form className="task-form">
                <input type="text" value={item} onChange={handleChange} className="task-input" />
                <button onClick={handleClick} className="task-button">Add Task</button>
            </form>
        );
}