import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCredits } from 'service/api-movie';

export const useFetchCast = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      if (!movieId) return;
      try {
        setLoading(true);
        const data = await movieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        setError('something wrong(');
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return { error, loading, cast };
};