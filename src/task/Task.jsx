import { useState } from "react";
import "./Task.css";
import { useImmer } from "use-immer";

export default function Task() {
    const [item, setItem] = useState("");
    const [items, setItems] = useImmer([]);

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        setItems((items) => {
            items.push(item);
        });
        setItem("");
    }

    return (
        <div className="task-container">
            <h1 className="task-title">Create Task</h1>
            <form className="task-form">
                <input type="text" value={item} onChange={handleChange} className="task-input" />
                <button onClick={handleClick} className="task-button">Add Task</button>
            </form>
            <h2 className="task-title">Task List</h2>
            <ul className="task-list">
                {items.map((item, index) => (
                    <li key={index} className="task-item">{item}</li>
                ))}
            </ul>
        </div>
    );

}