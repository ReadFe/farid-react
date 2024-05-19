import { useEffect, useState } from "react";

const Counter = () => {

    let [count, setCount] = useState(0);
    let [input, setInput] = useState('')

    useEffect(() => {
        setCount(count + 1);
        console.log(count);
    }, [input]);

    return (
        <div>
            <button onClick={ () => setCount(count - 1)} >-</button>
            {' '} <span>{count}</span> {' '}
            <button onClick={() => setCount(count + 1)} >+</button>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
        </div>
    )
}

export default Counter;