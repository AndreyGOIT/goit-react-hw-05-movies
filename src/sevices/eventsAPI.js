import axios from 'axios';

// const KEY = '1eb36deae800d0e3d9fd1b0466458d26';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/';
export async function fetchTrending() {
  const response = await axios(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=1eb36deae800d0e3d9fd1b0466458d26'
  );
  return response.data.results;
}

export async function fetchEvents() {
  const response = await axios(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=1eb36deae800d0e3d9fd1b0466458d26'
    // {
    //   params: {
    //     media_type: 'movie',
    //     time_window: 'day',
    //     apikey: KEY,
    //     //   size: 20,
    //   },
    // }
  );
  console.log(response.data.results);
  return response.data.results;
}

export async function fetchEventsById(id) {
  const response = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=1eb36deae800d0e3d9fd1b0466458d26`
  );
  return response.data;
}

export async function fetchEventsByName(query) {
  const response = await axios(
    `https://api.themoviedb.org/3/search/movie/?api_key=1eb36deae800d0e3d9fd1b0466458d26`,
    {
      params: {
        query,
      },
    }
  );
  return response.data;
}

export async function fetchMoviesReviews(id) {
  const response = await axios(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=1eb36deae800d0e3d9fd1b0466458d26&language=en-US&page=1`
  );
  return response.data;
}

export async function fetchMoviesCast(id) {
  const response = await axios(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=1eb36deae800d0e3d9fd1b0466458d26&language=en-US&page=1`
  );
  return response.data.cast;
}

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=1eb36deae800d0e3d9fd1b0466458d26&language=en-US&page=1
