import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/{movie_id}?api_key=1eb36deae800d0e3d9fd1b0466458d26&language=en-US'
      )
      .then(function (response) {
        // console.log(response.data.results);
        setMovie(response.data.results);
      });
  }, [movieId]);

  return (
    <>
      <img src={movie.poster_path} alt={movie.original_title} />
      <h2>{movie.original_title}</h2>
      <p>Overview: {movie.overview}</p>
      <p>Genres: {movie.genres}</p>
    </>
  );
}
