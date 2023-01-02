import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchEventsById } from 'sevices/eventsAPI';

export const Cast = () => {
  const { moviesId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchEventsById(moviesId).then(setDetails);
  }, [moviesId]);

  return (
    <>
      {details ? (
        <ul>
          {details.map(({ release_date, id, revenue, runtime }) => (
            <li key={id}>
              <p>Release date: {release_date}</p>
              <p>Revenue: {revenue}</p>
              <p>Runtime: {runtime} min</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no any details, sorry.</p>
      )}
    </>
  );
};
