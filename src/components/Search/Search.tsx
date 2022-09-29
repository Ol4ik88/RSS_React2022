import React, { FormEvent } from 'react';
import { IFilterSearch } from 'type/type';
import './Search.scss';

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
    this.props.filter(value);
  }
  onHandleClick(e: FormEvent) {
    e.preventDefault();
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
            className="input"
            type="text"
            placeholder="Enter text"
            value={this.state.searchQuery}
            onChange={(e) => this.onHandleChange(e.target.value)}
          />
          <button type="submit" onClick={(e) => this.onHandleClick(e)} />
        </form>
      </section>
    );
  }
}

export default Search;
