import { Routes, Route } from 'react-router-dom';
// import { Container } from './App.styled';
// import { lazy } from 'react';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from '../pages/Cast/Cast';
import Reviews from '../pages/Reviews/Reviews';

// const Layout = lazy(() => import('./Layout/Layout'));
// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('../pages/Cast/Cast'));
// const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  return (
    // <Container>
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
    // </Container>
  );
};
