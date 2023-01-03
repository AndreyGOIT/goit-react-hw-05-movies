import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchEventsById } from 'sevices/eventsAPI';

export const Cast = () => {
  const { moviesId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchEventsById(moviesId).then(setDetails);
  }, [moviesId]);

  // console.log(details);
  return (
    <>
      {details ? (
        <>
          <hr />
          <p>Release date: {details.release_date}</p>
          <p>Revenue: {details.revenue} $</p>
          <p>Runtime: {details.runtime} min</p>
        </>
      ) : (
        <p>There are no any details, sorry.</p>
      )}
    </>
  );
};
