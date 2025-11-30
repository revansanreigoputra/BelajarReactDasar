import Todo from "./Todo";

export default function TodoList() {
    const data = [
        {
            id: 0,
            text: "Belajar React Dasar",
            isCompleted: true,
            isDeleted: true

        },
        {
            id: 1,
            text: "Membuat Project React Pertama",
            isCompleted: true,
            
        },
        {
            id: 2,
            text: "Deploy Project React",
            isCompleted: false,
            
        },
        {
            id: 3,
            text: "Bersenang-senang dengan React",
            isCompleted: false,
            
        }
        ,
        {
            id: 4,
            text: "Membaca Dokumentasi React",
            isCompleted: false,
            
        }
    ]

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {data.map((todo) => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </ul>
        </div>
    )

}