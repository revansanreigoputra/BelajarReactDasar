export default function Toolbar({onClick}) {
    return (
        <div className="bungkus" onClick={onClick}>
            <h2>Toolbar</h2>
            <button className="click-button" onClick={onClick}>First</button>
            <button className="click-button" onClick={onClick}>Second</button>
        </div>
    )
}