import "../hello-world/HelloWorld.css";

export default function MyButton({text, onSmash}) {
    return (
        <button className="click-button" onClick={onSmash}>{text}</button>
    )
}