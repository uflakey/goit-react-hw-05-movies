import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchQuery } from 'service/api-movie';

export const useFetchSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    const fetchSearch = async () => {
      if (!query) return;
      try {
        setLoading(true);
        const data = await searchQuery(query);
        setSearch(data.results);
      } catch {
        setError('something wrong(');
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
  }, [query]);
  return { search, error, loading, handleSubmit };
};