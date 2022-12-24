import { useState } from 'react'
import { useUser } from '../context/UserContext'

function Profile() {
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useUser();

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser({ id: 1, username: 'johndoe', bio: 'I am a web developer' });
            setLoading(false);
        }, 1000)
    }

    const handleLogout = () => {
        setUser(null);
    }

    return (
        <div>
            {
                !user && (
                    <button onClick={handleLogin}>{loading ? 'loading...' : 'Login'}</button>
                )
            }
            <br />
            <code>{JSON.stringify(user)}</code>

            <br />
            {
                user && <button onClick={handleLogout}>Logout</button>
            }
        </div>
    )
}

export default Profile