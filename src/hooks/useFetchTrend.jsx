import { useEffect, useState } from 'react';
import { fetchAllTrend } from 'service/api-movie';

export const useFetchTrend = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        setLoading(true);
        const response = await fetchAllTrend();
        setMovies(response.results);
      } catch (error) {
        setError('something wrong(');
      } finally {
        setLoading(false);
      }
    };
    fetchTrend();
  }, []);

  return { movies, error, loading };
};