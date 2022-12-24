import React from 'react'

function Header({ number, data, increment }) {
    console.log('Header component Re-rendered!');
    return (
        <div>

            Header

            <br /><br />
            <button onClick={increment}>Click</button>
            {/* <code>{JSON.stringify(data)}</code> */}

        </div>
    )
}

export default React.memo(Header);
