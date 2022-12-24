import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrease}>Decrease</button>&nbsp;
            <button onClick={increase}>Increase</button>
{/*             
            <button onClick={() => setCount(count - 1)}>Decrease</button>&nbsp;
            <button onClick={() => setCount(count + 1)}>Increase</button> */}
        </div>
    )
}
