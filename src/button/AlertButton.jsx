// import "../hello-world/HelloWorld.css";

export default function AlertButton({text, message}) {
    function handleClick(e) {
        console.info(e.target);
        alert(message);
    }

    return (
        <button className="click-button" onClick={handleClick}>{text}</button>
    )
}