import "./Task.css";
import { useImmer } from "use-immer";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";  

export default function Task() {
    const [items, setItems] = useImmer([]);

    return (
        <div className="task-container">
            <h1 className="task-title">Task Manager</h1>
            <TaskForm setItems={setItems} />
            <TaskList items={items} />
        </div>
    );

}