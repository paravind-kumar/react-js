import { Link } from "react-router-dom"

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
        <div className="poster">
        <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="info">
            <h3>{movie.Title}</h3>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <p>{movie.Year}</p>
                <Link to={`/movie/${movie.imdbID}`} className="details-button">View Details</Link>
            </div>
        </div>
    </div>
  )
}

export default MovieCard