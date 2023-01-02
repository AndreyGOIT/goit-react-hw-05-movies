import { useState, useEffect } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { fetchEventsByName } from 'sevices/eventsAPI';

export const Movies = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('eventname');

  useEffect(() => {
    if (query === null || query === '') return;

    async function fetchEvent() {
      console.log(query);
      const data = await fetchEventsByName(query);
      setEvents(data);
    }
    fetchEvent();
  }, [query]);
  console.log(events);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ eventname: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query"></input>
        <button>Search</button>
      </form>
      {events && (
        <>
          <ul>
            {events.map(({ id, title }) => (
              <li key={id}>
                <p>Detailed info about film</p>
                <Link to={id}>{title}</Link>
              </li>
            ))}
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};
