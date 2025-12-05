export default function TaskList({ items = [] }) {
    return (
        <div className="task-container">
            <h2 className="task-title">Task List</h2>
            <ul className="task-list">
                {items.map((item, index) => (
                    <li key={index} className="task-item">{item}</li>
                ))}
            </ul>
        </div>
    );
}