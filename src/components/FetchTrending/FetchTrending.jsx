import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './FetchTrending.module.css';

export default function FetchTrending() {
  // const keyAPI = '1eb36deae800d0e3d9fd1b0466458d26';
  // const url = 'https://api.themoviedb.org/3/movie/';
  const [movies, setMovies] = useState(null);
  const location = useLocation;

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=1eb36deae800d0e3d9fd1b0466458d26'
      )
      .then(function (response) {
        setMovies(response.data.results);
      });
  }, []);
  // console.log(movies);
  return (
    <>
      {movies && (
        <>
          <ol className={styles.list}>
            {movies.map(({ id, title }) => (
              <li className={styles.listItem} key={id.toString()}>
                <Link
                  to={`/movies/${id}`}
                  state={location.state}
                  className={styles.link}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ol>
          <Outlet />
        </>
      )}
    </>
  );
}
