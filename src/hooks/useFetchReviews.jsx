import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from 'service/api-movie';

export const useFetchReviews = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      if (!movieId) return;
      try {
        setLoading(true);
        const data = await movieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError('something wrong(');
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);
  return { error, loading, reviews };
};