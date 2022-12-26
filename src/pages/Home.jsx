import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Home = () => {
  // const keyAPI = '1eb36deae800d0e3d9fd1b0466458d26';
  // const url = 'https://api.themoviedb.org/3/movie/';
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=1eb36deae800d0e3d9fd1b0466458d26'
      )
      .then(function (response) {
        // console.log(response.data.results);
        setMovies(response.data.results);
      });
  }, []);
  // console.log(movies);

  return (
    <main>
      <h1>Trending today</h1>

      {movies &&
        movies.map(movie => (
          <li key={movie.id.toString()}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </main>
  );
};
