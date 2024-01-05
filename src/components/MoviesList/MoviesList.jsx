import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      {movies.length > 0 ? (
        movies.map(movie => (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <p>{movie.title}</p>
            </Link>
            
          </div>
        ))
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
};

export default MoviesList;