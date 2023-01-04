import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'sevices/eventsAPI';
import styles from '../pages/Reviews.module.css';

export const Reviews = () => {
  const { moviesId } = useParams();
  const [reviewsArr, setReviewsArr] = useState(null);

  useEffect(() => {
    fetchMoviesReviews(moviesId).then(setReviewsArr);
  }, [moviesId]);
  // console.log(reviewsArr);
  return (
    <>
      <hr />
      {reviewsArr ? (
        <ul>
          {reviewsArr.results.map(({ author, id, created_at, content }) => (
            <li className={styles.listEl} key={id.toString()}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
              <p>date: {created_at}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
