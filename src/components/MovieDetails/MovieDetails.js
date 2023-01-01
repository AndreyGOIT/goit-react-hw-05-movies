import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=1eb36deae800d0e3d9fd1b0466458d26`
      )
      .then(function (response) {
        console.log(response.data);
        setMovie(response.data);
      });
  }, [movieId]);
  console.log(movie);
  console.log(movieId);
  console.log(movie.poster_path);
  return (
    <>
      <p>страница фильма</p>
      {/* <h2>{movie.original_title}</h2>
      <p>Overview: {movie.overview}</p> */}

      {/* <img src="{movie.poster_path}" alt="{movie.original_title}" /> */}

      {/* <p>Genres: {movie.genres}</p> */}
    </>
  );
}
