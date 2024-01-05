import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const HomePage = () => {
  return (
    <>
      <header>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li>
            <NavLink to="/" end style={{ textDecoration: 'none' }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              style={{ textDecoration: 'none', marginLeft: '10px' }}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main style={{ marginLeft: '20px' }}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};