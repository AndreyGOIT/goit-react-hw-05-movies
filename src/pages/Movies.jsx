import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchEventsByName } from 'sevices/eventsAPI';

export const Movies = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('eventname');

  useEffect(() => {
    async function fetchEvents() {
      const data = await fetchEventsByName(query);
      setEvents(data);
    }
  }, [query]);
  console.log(events);

  return (
    <main>
      <form>
        <input type="text"></input>
        <button type="submit">Search</button>
      </form>
    </main>
  );
};
