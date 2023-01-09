// import { useState, useEffect } from 'react';
// import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
// import { fetchEventsByName } from 'sevices/eventsAPI';
import styles from '../../pages/Movies/Movies.module.css';
// import image from '../../images/black-white-films.jpeg';
import loupe from '../../images/icon-loupe.png';

export default function Movies() {
  // const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('eventname');

  // const location = useLocation;

  // useEffect(() => {
  //   if (query === null || query === '') return;

  //   async function fetchEvent() {
  //     const data = await fetchEventsByName(query);

  //     setEvents(data.results);
  //   }
  //   fetchEvent();
  // }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ eventname: form.elements.query.value });
    form.reset();
  };
  console.log(searchParams);

  return (
    <>
      <form className={styles.formBlock} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="query"
          placeholder="enter movie name"
        ></input>
        <button className={styles.button}>
          <img src={loupe} alt="BlackWhiteCinema" width="30" height="30" />
          <b className={styles.buttonText}>SEARCH</b>
        </button>
      </form>
      {/* {events && (
        <div className={styles.seachList}>
          <ol className={styles.list}>
            {events.map(({ id, original_title }) => (
              <li className={styles.listItem} key={id}>
                <Link
                  to={`/movies/${id}`}
                  state={location.state}
                  className={styles.link}
                >
                  {original_title}
                </Link>
              </li>
            ))}
          </ol>
          <div>
            <img src={image} alt="BlackWhiteCinema" width="400" height="250" />
          </div>
          <Outlet />
        </div>
      )} */}
    </>
  );
}
