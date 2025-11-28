// multiple components in one file / pemecahan function
export default function HelloWorld() {
    return (
        <div>
            <HeaderHelloWorld text="Hello World!" />
            <ParagraphHelloWorld />
        </div>
    );
}

function HeaderHelloWorld({text = "Ups, Lupa Kasih Teks!"  }) {
    return (
        <h1 style={{
            color: "blue",
            backgroundColor: "yellow"
        }}>{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const text = "Welcome to my first React component!";
    const style = {
        color: "green",
        backgroundColor: "lightgray"
    };
    return (
        <p style={style}>{text.toLowerCase()}</p>
    )
}