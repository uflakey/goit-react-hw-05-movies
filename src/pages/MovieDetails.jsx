import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { useFetchDetails } from 'hooks/useFetchDetails';
import { useRef } from 'react';

const MovieDetails = () => {
  const { movies, loading, error } = useFetchDetails();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  return (
    <div>
      <Link to={goBack.current}>Go Back</Link>
      {loading && <Loader />}
      {error && <p style={{ color: 'red' }}>Not found{error}</p>}
      {movies && (
        <>
          <h1>{movies.title}</h1>
          <div style={{ display: 'flex' }}>
            <img
              src={
                movies.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movies.poster_path}`
                  : defaultImg
              }
              alt={movies.title}
              width={250}
              height={375}
            />
            <div
              style={{
                marginLeft: '20px',
                width: '600px',
              }}
            >
              <h2>User score:</h2>
              <p>{movies.popularity}</p>
              <h2>Overview</h2>
              <p>{movies.overview}</p>
              <h2>Genre</h2>
              <p>
                {movies.genres.map(genre => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </p>
            </div>
          </div>
          <h3 style={{ marginTop: '20px' }}>Additional information</h3>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default MovieDetails;