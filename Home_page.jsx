// src/pages/Home_page.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MovieList from './MovieList';

// Static list of movies for demonstration
const movies = [
  {
    id: 1,
    title: 'Spider-Man: No Way Home',
    releaseDate: '2021-12-17',
    rating: '8.5',
  },
  {
    id: 2,
    title: 'The Matrix Resurrections',
    releaseDate: '2021-12-22',
    rating: '6.8',
  },
  {
    id: 3,
    title: 'Dune',
    releaseDate: '2021-10-22',
    rating: '8.0',
  },
  {
    id: 4,
    title: 'No Time to Die',
    releaseDate: '2021-09-30',
    rating: '7.4',
  },
];

function Home_page() {
  return (
    <div>
      <Navbar/>
      <div className="content">
        <h1>Popular Movies</h1>
        <MovieList movies={movies} /> {/* Pass the static movie list to MovieList */}
      </div>
      <Footer />
    </div>
  );
}

export default Home_page;
