import { fetchEventsById } from 'sevices/eventsAPI';

export const Cast = () => {
  const event = fetchEventsById();
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
