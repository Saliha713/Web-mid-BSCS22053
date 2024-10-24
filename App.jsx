import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from TMDB API
    axios
      .get('https://api.themoviedb.org/3/movie/popular', {
        params: { api_key: 'YOUR_API_KEY' },
      })
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
