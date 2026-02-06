import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=f0f7422c&i=${id}`);
        const data = await res.json();
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    fetchMovieDetails();
  }, [id]);

  if (!movie) return (
    <div className="loader-container">
          <div className="spinner"></div>
        </div>
  )

  return (
    <section className="details-container">
      <div className="poster">
        <img src={movie.Poster} alt={movie.Title || "Movie Poster"} />
      </div>

      <div className="details">
        <h1>{movie.Title || "Movie Title"}</h1>
        <p className="tagline">{movie.Tagline || movie.Plot || "No tagline available."}</p>

        <div className="meta">
          <span>⭐ {movie.imdbRating || "N/A"}</span>
          <span>⏱ {movie.Runtime || "N/A"}</span>
          <span>📅 {movie.Released || "N/A"}</span>
          {movie.totalSeasons && <span>📺 Seasons: {movie.totalSeasons}</span>}
        </div>

        <p className="overview">{movie.Plot || "No plot available."}</p>

        <div className="extra">
          <p><strong>Genre:</strong> {movie.Genre || "N/A"}</p>
          <p><strong>Language:</strong> {movie.Language || "N/A"}</p>
          <p><strong>Country:</strong> {movie.Country || "N/A"}</p>
          <p><strong>Director:</strong> {movie.Director || "N/A"}</p>
          <p><strong>Writer:</strong> {movie.Writer || "N/A"}</p>
          <p><strong>Actors:</strong> {movie.Actors || "N/A"}</p>
          <p><strong>Awards:</strong> {movie.Awards || "N/A"}</p>
          <p><strong>Rated:</strong> {movie.Rated || "N/A"}</p>
          {movie.Ratings && movie.Ratings.length > 0 && (
            <div>
              <strong>Ratings:</strong>
              <ul>
                {movie.Ratings.map((r, index) => (
                  <li key={index}>{r.Source}: {r.Value}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          className="watch-btn"
          onClick={() => window.open(movie.Trailer || "https://www.youtube.com/results?search_query=" + movie.Title, "_blank")}
        >
          ▶ Watch Trailer
        </button>
      </div>
    </section>
  );
}

export default MovieDetails;
