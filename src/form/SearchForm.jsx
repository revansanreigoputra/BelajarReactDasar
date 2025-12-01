export default function SearchForm() {
    return (
        <form action="">
            <input type="text" name="" id="" />
            <button onClick={(e) => (
                e.preventDefault(),
                alert("Searching...")
            )}>Search</button>
        </form>
    )
}