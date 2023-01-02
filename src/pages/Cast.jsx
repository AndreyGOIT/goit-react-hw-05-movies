import { useParams } from 'react-router-dom';
import { fetchEventsById } from 'sevices/eventsAPI';

export const Cast = () => {
  const { moviesId } = useParams();
  const event = fetchEventsById(moviesId);
  return (
    <>
      {event ? (
        <h2>{event.cast}</h2>
      ) : (
        <p>We have no information about actors, sorry.</p>
      )}
    </>
  );
};
