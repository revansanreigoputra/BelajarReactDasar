// export default function HelloWorld() {
//     return (
//         <div>
//             <h1>Hello World</h1>
//             <p>Welcome to my first React component!</p>
//         </div>
//     );
// }

// export default HelloWorld;

// multiple components in one file / pemecahan function
export default function HelloWorld() {
    return (
        <div>
            <HeaderHelloWorld />
            <ParagraphHelloWorld />
        </div>
    );
}

// function HeaderHelloWorld() {
//     return (
//         <h1>Hello World</h1>
//     )
// }

// function ParagraphHelloWorld() {
//     return (
//         <p>Welcome to my first React component!</p>
//     )
// }


// Javascript di JSX
function HeaderHelloWorld() {
    const text = "Hello World";
    return (
        <h1>{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const text = "Welcome to my first React component!";
    return (
        <p>{text.toLowerCase()}</p>
    )
}