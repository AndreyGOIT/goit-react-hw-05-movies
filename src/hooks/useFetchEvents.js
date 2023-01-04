import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventsById } from 'sevices/eventsAPI';

export default function useFetchEvent() {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();
  console.log(eventId);

  useEffect(() => {
    fetchEventsById(eventId).then(setEvent);
  }, [eventId]);

  return event;
}
