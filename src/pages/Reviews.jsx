import { fetchMoviesReviews } from 'sevices/eventsAPI';

export const Reviews = () => {
  const events = fetchMoviesReviews();
  return (
    <>
      {events ? (
        <ul>
          {events.map(({ author, id, created_at, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>date: {created_at}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews, sorry.</p>
      )}
    </>
  );
};
