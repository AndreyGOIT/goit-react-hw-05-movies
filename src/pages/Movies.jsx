import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchEventsByName } from 'sevices/eventsAPI';

export const Movies = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('eventname');

  const location = useLocation;

  useEffect(() => {
    if (query === null || query === '') return;

    async function fetchEvent() {
      // console.log(query);
      const data = await fetchEventsByName(query);
      // console.log(data);
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
      <form onSubmit={handleSubmit}>
        <input type="text" name="query"></input>
        <button>Search</button>
      </form>
      {events && (
        <>
          <ul>
            {events.map(({ id, original_title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={location.state}>
                  {original_title}
                </Link>
              </li>
            ))}
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};
