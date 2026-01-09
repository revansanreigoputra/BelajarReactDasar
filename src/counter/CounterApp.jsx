import Counter from "./Counter";
import { useState } from "react";

export default function CounterApp() {
    const [show2, setShow2] = useState(true);

    function handleChange(e){
        setShow2(e.target.checked);
    }

    return (
        <div>
            {/* <Counter name="Eko" /> */}
            {show2 ? <Counter name="Budi" /> : <Counter name="Eko" />}
            <input type="checkbox" checked={show2} onChange={handleChange} /> Show/Hide Counter 2
        </div>
    )

}