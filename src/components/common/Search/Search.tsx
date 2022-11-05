import React, { FormEvent, useEffect, useRef } from 'react';
import { selectHomeState, setSearchText } from 'store/homeSlice';
import { useAppDispatch, useAppSelector } from 'store/hook';
import './Search.scss';
import { IFilterSearch } from './Search.type';

function Search(props: IFilterSearch) {
  const { textSearch } = useAppSelector(selectHomeState);
  const dispatch = useAppDispatch();

  const searchRef = useRef(textSearch);

  function onHandleClick(e: FormEvent) {
    e.preventDefault();
    props.filter(textSearch);
  }
  useEffect(() => {
    searchRef.current = textSearch;
  }, [textSearch]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchQuery', searchRef.current);
    };
  }, []);

  return (
    <form className="search__form">
      <input
        data-testid="Search"
        className="search__input"
        type="text"
        placeholder="Enter race character"
        value={textSearch}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
      />
      <label className="search__label">{props.label}</label>
      <button type="submit" onClick={(e) => onHandleClick(e)} />
    </form>
  );
}

export default Search;
