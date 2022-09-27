import cards from 'data/data';
import React from 'react';
import { ICards } from 'type/type';
import CardItem from './CardItem';
import './CardList.scss';

class CardList extends React.Component<ICards> {
  constructor(props: ICards) {
    super(props);
    this.state = {
      cards: cards,
    };
  }
  render() {
    return (
      <section className="cards">
        {this.props.cards.map((card) => {
          return <CardItem card={card} key={card.id} />;
        })}
      </section>
    );
  }
}

export default CardList;
