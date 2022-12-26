import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import { Link, Header, Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};
