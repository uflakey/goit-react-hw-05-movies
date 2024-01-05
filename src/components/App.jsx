import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('./MovieInfo/Cast'));
const Reviews = lazy(() => import('./MovieInfo/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to=" / " />} />
    </Routes>
  );
};
