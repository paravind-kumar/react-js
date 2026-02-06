import { Link } from 'react-router-dom'
import { useRef } from 'react'

export default function Navbar({ fetchMovies }) {
    const imputRef = useRef();

    const handleSearch = (e) => {
        e.preventDefault();
        const query = imputRef.current.value.trim();
        if(query){
            fetchMovies(query);
        }
    }
  return (
    <>
        <nav className="header">
            <div className='left'>
                <Link to="/" className="logo">🎬 MovieExplorer</Link>
                <Link to="/">Home</Link>
            </div>

            <form className="search-box" onSubmit={handleSearch}>
                <input type="text" placeholder="Search movies..." ref={imputRef} />
                <button>Search</button>
            </form>
        </nav>
    </>
  )
}
