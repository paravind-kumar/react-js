import {useContext} from 'react'
import { AuthContext } from './AuthContext'

const Navbar = () => {
    const {isLoggedIn, login, logout} = useContext(AuthContext)

    return(
        <nav>
            {isLoggedIn ? (
                <button onClick={logout}>Login</button>
            ) : (
                <button onClick={login}>Logout</button>
            )}
        </nav>
    )
}

export default Navbar