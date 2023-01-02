import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
import { fetchEventsById } from 'sevices/eventsAPI';
import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchEventsById(moviesId).then(setMovie);
  }, [moviesId]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${movieId}?api_key=1eb36deae800d0e3d9fd1b0466458d26`
  //     )
  //     .then(function (response) {
  //       console.log(response.data);
  //       setMovie(response.data);
  //     });
  // }, [movieId]);
  // console.log(movie);
  // console.log(movieId);
  // console.log(movie.poster_path);
  console.log(movie);
  return (
    <>
      <button
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
      </button>
      <p>страница фильма</p>
      {movie && (
        <>
          <img
            src={movie.poster_path}
            alt={movie.original_title}
            width="200"
            height="300"
          />
          <h2>{movie.original_title}</h2>
          <b>Overview: </b>
          <p>{movie.overview}</p>
          <b>Genres:</b>
          {movie.genres.map(({ name, index }) => (
            <ul>
              <li key={index}>{name}</li>
            </ul>
          ))}
          <hr />
          <p>Additional information</p>
          <Link to="cast">Cast</Link>
          <br />
          <Link to="reviews">Reviews</Link>
          <hr />
        </>
      )}
    </>
  );
};
