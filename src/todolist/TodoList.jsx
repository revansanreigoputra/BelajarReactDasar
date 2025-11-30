import Todo from "./Todo";

export default function TodoList() {
    return (
        <ul>
            <Todo text="Belajar React Dasar" isCompleted={true} isDeleted={true}/>
            <Todo text="Membuat Project React Pertama" isCompleted={true} />
            <Todo text="Deploy Project React" isCompleted={false} />
            <Todo text="Bersenang-senang dengan React" isCompleted={false} />
        </ul>
    )
}