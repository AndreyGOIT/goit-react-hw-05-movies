import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
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

  // const imageBaseUrl = 'https://image.tmdb.org/t/p/w154';
  // const poster = movie.poster_path;
  // const fullPath = imageBaseUrl + poster;
  // console.log(movie);
  // console.log(fullPath);
  return (
    <>
      <button
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
      </button>
      <br />
      {movie && (
        <>
          <img
            src={movie.poster_path}
            // src={fullPath}
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
          <>
            <p>Additional information</p>
            <Link to="cast">Cast</Link>
            <br />
            <Link to="reviews">Reviews</Link>
            <Outlet />
          </>
          <hr />
        </>
      )}
    </>
  );
};
