import "./HelloWorld.css";

export default function HelloWorld() {
    const props = {
        text: "Hello World from Spread Sytnax!"
    };
    return (
        <div>
            <HeaderHelloWorld {...props} />
            <ParagraphHelloWorld />
        </div>
    );
}

function HeaderHelloWorld({text = "Ups, Lupa Kasih Teks!"  }) {
    return (
        <h1 className="title">{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const text = "Welcome to my first React component!";
    return (
        <p className="content">{text.toLowerCase()}</p>
    )
}