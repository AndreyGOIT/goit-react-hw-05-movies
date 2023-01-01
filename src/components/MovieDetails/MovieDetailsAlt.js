import axios from 'axios';
import { Component } from 'react';

class MovieDetailsAlt extends Component {
  state = {
    id: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=1eb36deae800d0e3d9fd1b0466458d26`
    );
    console.log(response);
    this.setState({ ...response.data });
  }
  render() {
    return (
      <>
        <p>страница фильма</p>
      </>
    );
  }
}
export default MovieDetailsAlt;
