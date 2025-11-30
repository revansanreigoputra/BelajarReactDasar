import Todo from "./Todo";

export default function TodoList() {
    return (
        <ul>
            <Todo text="Belajar React Dasar" isCompleted={true} />
            <Todo text="Membuat Project React Pertama" isCompleted={false} />
            <Todo text="Deploy Project React" isCompleted={false} />
            <Todo text="Bersenang-senang dengan React" isCompleted={false} />
        </ul>
    )
}