import CardList from '../components/CardList/CardList';
import Search from '../components/Search/Search';
import React from 'react';
import cards from '../data/data';
import { ICards, PropsComponent } from 'type/type';

class Home extends React.Component<PropsComponent, ICards> {
  constructor(props: PropsComponent) {
    super(props);
    this.state = {
      cards: cards,
    };
    this.filterList = this.filterList.bind(this);
  }
  filterList(text: string) {
    const filteredList =
      cards.filter((card) => card.title.toLowerCase().includes(text.toLowerCase())) || cards;
    this.setState({ cards: filteredList });
  }
  render() {
    return (
      <section className="home container" data-testid="HomePage">
        <h1>It&apos;s homepage</h1>
        <Search filter={this.filterList} />
        <CardList cards={this.state.cards} />
      </section>
    );
  }
}

export default Home;
