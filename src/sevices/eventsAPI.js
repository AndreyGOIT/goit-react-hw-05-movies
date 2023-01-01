import axios from 'axios';

const KEY = '1eb36deae800d0e3d9fd1b0466458d26';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/';

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
    `https://api.themoviedb.org/3/movie/${id}?api_key=1eb36deae800d0e3d9fd1b0466458d26&language=en-US`
  );
  return response.data;
}

export async function fetchEventsByName(keyword) {
  const response = await axios(`https://api.themoviedb.org/3/movie/top_rated`, {
    params: {
      apikey: KEY,
      keyword,
    },
  });
  return response.data;
}
