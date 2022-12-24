import { useEffect, useState } from 'react'

import axios from 'axios'

export default function Users() {
    const [users, setUsers] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((res) => res.json())
    //         .then((data) => setUsers(data))            
    //         .catch((e) => console.log(e))
    //         .finally(() => setIsLoading(false));
    // }, []);


    
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))            
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));
    }, []);


    return (
        <div>
            <h1>Users</h1>

            { isloading && <div>Loading...</div> }


            {
                users.map((user) => (
                    <div key={user.id}>{user.name}</div>
                ))
            }
        </div>
    )
}
