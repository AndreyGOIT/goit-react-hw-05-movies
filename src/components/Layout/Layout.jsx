import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigatiuon/Navigation';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {/* <footer>Footer</footer> */}
    </>
  );
};
