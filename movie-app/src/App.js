import React, { useState } from 'react';
import './App.css';

const moviesData = [
  { title: 'Jhon Wick', genre: 'Action', releaseYear: 2023 },
  { title: 'Framin Hot', genre: 'Drama', releaseYear: 2023 },
  { title: 'Friends: The Reunion', genre: 'Comedy', releaseYear: 2021 },
  { title: 'Tenet', genre: 'Action', releaseYear: 2020 },
  { title: 'IT: Chapter Two ', genre: 'Horror', releaseYear: 2019 },
];

const MovieList = () => {
  const [movies, setMovies] = useState(moviesData);
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const genres = ['All Genres', ...new Set(moviesData.map(movie => movie.genre))];

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
    if (genre === 'All Genres') {
      setMovies(moviesData);
    } else {
      const filteredMovies = moviesData.filter(movie => movie.genre === genre);
      setMovies(filteredMovies);
    }
  };

  const handleMovieClick = (title) => {
    alert(`Clicked on ${title}`);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <div>
        <label htmlFor="genre">Filter by Genre:</label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} onClick={() => handleMovieClick(movie.title)}>
            <div>Title: {movie.title}</div>
            <div>Genre: {movie.genre}</div>
            <div>Release Year: {movie.releaseYear}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
