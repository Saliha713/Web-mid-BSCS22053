import React from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          rating={movie.vote_average}
          poster={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        />
      ))}
    </div>
  );
};

export default MovieList;
