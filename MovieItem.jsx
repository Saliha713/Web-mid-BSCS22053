// src/components/MovieItem.jsx
import React from 'react';
import './MovieItem.css';

const MovieItem = ({ title, releaseDate, rating, poster }) => {
  return (
    <div className="movie-item">
      <img className="movie-poster" src={poster} alt={`${title} Poster`} />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-release">Release Date: {releaseDate}</p>
        <p className="movie-rating">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default MovieItem;
