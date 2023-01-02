import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'sevices/eventsAPI';

export const Reviews = () => {
  const { moviesId } = useParams();
  const [reviewsArr, setReviewsArr] = useState(null);

  useEffect(() => {
    fetchMoviesReviews(moviesId).then(setReviewsArr);
  }, [moviesId]);

  return (
    <>
      {reviewsArr ? (
        <ul>
          {reviewsArr.map(({ author, id, created_at, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>date: {created_at}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no any reviews, sorry.</p>
      )}
    </>
  );
};
