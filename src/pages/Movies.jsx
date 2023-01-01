import { useState, useEffect } from 'react';
import { fetchEvents } from 'sevices/eventsAPI';

export const Movies = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);
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
