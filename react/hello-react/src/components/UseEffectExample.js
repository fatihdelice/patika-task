import { useState, useEffect } from 'react'

export default function UseEffectExample() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('Fatih');

    useEffect(() => {
        console.log('useEffect called');

        // const interval = setInterval(() => {
        //     setNumber((n) => n + 1);
        // }, 1000);

        // return () => clearInterval(interval);

    }, []);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>

            <hr />

            <h1>{name}</h1>
            <button onClick={() => setName("Mete")}>Click</button>
        </div>
    )
}
