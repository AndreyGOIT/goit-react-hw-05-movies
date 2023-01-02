import { fetchEventsById } from 'sevices/eventsAPI';

export const Reviews = () => {
  const event = fetchEventsById();
  return (
    <>
      {event ? (
        <h2>vote_average: {event.vote_average}</h2>
      ) : (
        <p>We have no information about reviews, sorry.</p>
      )}
    </>
  );
};
