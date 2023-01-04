import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import { Container } from './App.styled';

// import { Layout } from './Layout/Layout';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
import { lazy } from 'react';

const MyLayout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<MyLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};
