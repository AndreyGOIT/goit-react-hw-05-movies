import { Outlet } from 'react-router-dom';
import Navigation from '../Navigatiuon/Navigation';

export default function Layout() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
}
