import MovieCard from "./MovieCard"
import { Link } from 'react-router-dom'

function MovieList({ movies }) {
    if(movies.length === 0){
        return <h2 className="no-movies">No movies found</h2>
    }
    
  return (
    <main className="movie-grid">
        {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
        ))}
    </main>
  )
}

export default MovieList