import React, { FormEvent } from 'react';
import './Search.scss';
import { IFilterSearch } from './Search.type';

class Search extends React.Component<IFilterSearch, { searchQuery: string }> {
  constructor(props: IFilterSearch) {
    super(props);
    this.state = {
      searchQuery: localStorage.getItem('searchQuery') || '',
    };
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(value: string) {
    this.setState({ searchQuery: value });
  }
  onHandleClick(e: FormEvent) {
    e.preventDefault();
    this.props.filter(this.state.searchQuery);
  }
  componentDidMount() {
    this.onHandleChange(this.state.searchQuery);
  }
  componentWillUnmount() {
    localStorage.setItem('searchQuery', this.state.searchQuery);
  }
  render() {
    return (
      <section className="search">
        <form className="search__form">
          <input
            data-testid="Search"
            className="search__input"
            type="text"
            placeholder="Enter race character"
            value={this.state.searchQuery}
            onChange={(e) => this.onHandleChange(e.target.value)}
          />
          <label className="search__label">{this.props.label}</label>
          <button type="submit" onClick={(e) => this.onHandleClick(e)} />
        </form>
      </section>
    );
  }
}

export default Search;
