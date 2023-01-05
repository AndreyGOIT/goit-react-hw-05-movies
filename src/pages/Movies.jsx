import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchEventsByName } from 'sevices/eventsAPI';
import styles from '../pages/Movies.module.css';

export default function Movies() {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('eventname');

  const location = useLocation;

  useEffect(() => {
    if (query === null || query === '') return;

    async function fetchEvent() {
      console.log(query);
      const data = await fetchEventsByName(query);
      console.log(data);
      setEvents(data.results);
    }
    fetchEvent();
  }, [query]);
  // console.log(events);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ eventname: form.elements.query.value });
    form.reset();
  };

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
          <b>SEARCH</b>
        </button>
      </form>
      {events && (
        <>
          <ol className={styles.list}>
            {events.map(({ id, original_title }) => (
              <li className={styles.listItem} key={id}>
                <Link to={`/movies/${id}`} state={location.state}>
                  {original_title}
                </Link>
              </li>
            ))}
          </ol>
          <Outlet />
        </>
      )}
    </>
  );
}
