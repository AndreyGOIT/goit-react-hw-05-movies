import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Outlet, useLocation } from 'react-router-dom';
// import { useRouteMatch } from 'react-router-dom';

export default function FetchTrending() {
  // const keyAPI = '1eb36deae800d0e3d9fd1b0466458d26';
  // const url = 'https://api.themoviedb.org/3/movie/';
  //   const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);
  const location = useLocation;

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
    <>
      {movies && (
        <>
          <ul>
            {movies.map(({ id, title }) => (
              <li key={id.toString()}>
                <Link to={`/movies/${id}`} state={location.state}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
}