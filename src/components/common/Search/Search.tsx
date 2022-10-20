import React, { FormEvent, useEffect, useRef, useState } from 'react';
import './Search.scss';
import { IFilterSearch } from './Search.type';

function Search(props: IFilterSearch) {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchQuery') || '');
  const searchRef = useRef(searchQuery);

  function onHandleClick(e: FormEvent) {
    e.preventDefault();
    props.filter(searchQuery);
  }
  useEffect(() => {
    searchRef.current = searchQuery;
  }, [searchQuery]);

  useEffect(() => {
    setSearchQuery(searchQuery);
    return () => {
      localStorage.setItem('searchQuery', searchRef.current);
    };
  }, []);

  return (
    <section className="search">
      <form className="search__form">
        <input
          data-testid="Search"
          className="search__input"
          type="text"
          placeholder="Enter race character"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <label className="search__label">{props.label}</label>
        <button type="submit" onClick={(e) => onHandleClick(e)} />
      </form>
    </section>
  );
}

export default Search;
