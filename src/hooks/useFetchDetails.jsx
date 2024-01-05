import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetails } from 'service/api-movie';

export const useFetchDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!movieId) return;
      try {
        setLoading(true);
        const data = await movieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError('something wrong(');
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [movieId]);

  return { movies, loading, error };
};