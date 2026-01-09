import Counter from "./Counter";
import { useState } from "react";

export default function CounterApp() {
    const [show2, setShow2] = useState(true);

    function handleChange(e){
        setShow2(e.target.checked);
    }

    return (
        <div>
            
            {show2 ? <Counter key="budi" name="Budi" /> : <Counter key="ani" name="Ani" /> }

            <input type="checkbox" checked={show2} onChange={handleChange} /> Show/Hide Counter 2
        </div>
    )

}