import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from '../components/MovieDetails/MovieDetails';
import { Container } from './App.styled';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';
import { lazy } from 'react';

const MyLayout = lazy(() => import('./Layout/Layout'));
const MyHome = lazy(() => import('../pages/Home'));
const MyMovies = lazy(() => import('../pages/Movies'));
const MyMovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const MyCast = lazy(() => import('../pages/Cast'));
const MyReviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<MyLayout />}>
          <Route index element={<MyHome />} />
          <Route path="movies" element={<MyMovies />} />
          <Route path="movies/:moviesId" element={<MyMovieDetails />}>
            <Route path="cast" element={<MyCast />} />
            <Route path="reviews" element={<MyReviews />} />
          </Route>
        </Route>

        <Route path="*" element={<MyHome />} />
      </Routes>
    </Container>
  );
};
