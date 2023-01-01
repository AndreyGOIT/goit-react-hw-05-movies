import { useFetchEvent } from 'hooks/useFetchEvents';

export const MovieSubPage = () => {
  const event = useFetchEvent();
  console.log(event);

  return <div>text sub page EVENT</div>;
};
