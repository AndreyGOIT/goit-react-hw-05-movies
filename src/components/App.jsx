import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';
// import { MovieSubPage } from 'pages/MovieSubPage';
// import MovieDetailsAlt from '../components/MovieDetails/MovieDetailsAlt';
import { Container } from './App.styled';

import { Layout } from './Layout/Layout';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />} />
          {/* <Route path="/cast" element={<Cast />} />
            <Route path="/reviews" element={<Reviews />} />
          </Route> */}
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":moviesId" element={MovieDetails} />
          </Route>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
        </Route>
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes> */}
    </Container>
  );
};
