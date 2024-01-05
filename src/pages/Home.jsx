import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useFetchTrend } from 'hooks/useFetchTrend';

const Home = () => {
  const { movies, loading } = useFetchTrend();
  return (
    <div>
      <h2>Trending today</h2>
      {loading && <Loader />}

      {movies !== null && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;