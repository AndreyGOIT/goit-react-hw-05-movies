// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { fetchMoviesCast } from 'sevices/eventsAPI';
// import styles from '../Cast/Cast.module.css';

export default function Cast() {
  // const { moviesId } = useParams();
  // const [details, setDetails] = useState(null);

  // useEffect(() => {
  //   fetchMoviesCast(moviesId).then(setDetails);
  // }, [moviesId]);

  return (
    <>
      <p>TEST!!!</p>
      {/* {details ? (
        <>
          <hr />
          <ul className={styles.castList}>
            {details.map(({ id, character, name, profile_path }) => (
              <li className={styles.listElem} key={id.toString()}>
                <img
                  src={`https://image.tmdb.org/t/p/w154${profile_path}`}
                  alt={name}
                />
                <div className={styles.listElemBottom}> */}
      {/* <br /> */}
      {/* <b>{name}</b>
                  <p>Character: {character}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>There are no any details, sorry.</p>
      )} */}
    </>
  );
}
