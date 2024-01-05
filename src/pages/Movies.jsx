import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useFetchSearch } from 'hooks/useFetchSearch';

const Movies = () => {
  const { search, error, loading, handleSubmit } = useFetchSearch();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <SearchForm onSearch={handleSubmit} />
      {loading && <Loader />}
      {error && <p style={{ color: 'red' }}>Not found{error}</p>}
      {search && <MoviesList movies={search} />}
    </div>
  );
};

export default Movies;