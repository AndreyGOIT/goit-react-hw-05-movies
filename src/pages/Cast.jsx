import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesCast } from 'sevices/eventsAPI';

export const Cast = () => {
  const { moviesId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchMoviesCast(moviesId).then(setDetails);
  }, [moviesId]);

  console.log(details);
  // const cast = details.cast;
  // console.log(cast);
  return (
    <>
      {details ? (
        <>
          <hr />
          <ul>
            {details.map(({ id, character, name, profile_path }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w154${profile_path}`}
                  alt={name}
                />
                <br />
                <b>{name}</b>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>There are no any details, sorry.</p>
      )}
    </>
  );
};
