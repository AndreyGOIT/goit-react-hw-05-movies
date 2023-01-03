import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { fetchEventsById } from 'sevices/eventsAPI';
import { Link } from 'react-router-dom';
import styles from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchEventsById(moviesId).then(setMovie);
  }, [moviesId]);

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
          <div className={styles.wrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
              alt={movie.original_title}
              width="200"
              height="300"
            />
            <div>
              <h2 className={styles.title}>{movie.original_title}</h2>
              <br />
              <b>Overview: </b>
              <p>{movie.overview}</p>
              <b>Genres:</b>
              <ul>
                {movie.genres.map(({ name, index }) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          </div>

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
