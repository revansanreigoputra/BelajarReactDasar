import { useRef } from "react";

export default function AlertButton({text, message}) {

    const counter = useRef(0);

    function handleClick(e) {
        console.info(e.target);
        alert("" + message + "\nClicked " + (counter.current++) + " times");
    }

    return (
        <button className="click-button" onClick={handleClick}>{text}</button>
    )
}