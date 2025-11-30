import Todo from "./Todo";

export default function TodoList() {
    const data = [
        {
            text: "Belajar React Dasar",
            isCompleted: true,
            isDeleted: true

        },
        {
            text: "Membuat Project React Pertama",
            isCompleted: true,
            
        },
        {
            text: "Deploy Project React",
            isCompleted: false,
            
        },
        {
            text: "Bersenang-senang dengan React",
            isCompleted: false,
            
        }
    ]

    const todos = data.map((todo) => (
        <Todo {...todo}/>
    ))
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos}
            </ul>
        </div>
    )

}