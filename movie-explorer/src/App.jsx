import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=f0f7422c&s=${query}`);
      const data = await res.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchInitialMovies = async () => {
      await fetchMovies('Avengers');
    };

    fetchInitialMovies();
  }, []);

  return (
    <Router>
      <Navbar fetchMovies={fetchMovies} />
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
