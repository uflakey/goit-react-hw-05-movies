import { useState } from 'react';
import css from './SearchForm.module.css';

export const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) return alert('Can not be empty');
    onSearch(query);
    setQuery('');
  };

  return (
    <div className={css.Search}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button className={css.SearchFormButton} type="submit">
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleInput}
        />
      </form>
    </div>
  );
};