import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from '../pages/Cast/Cast';
import Reviews from '../pages/Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moviesId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
