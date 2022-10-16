import React from 'react';
import { IStateCards } from 'type/type';
import CardItem from './CardItem/CardItem';
import './CardList.scss';

class CardList extends React.Component<IStateCards> {
  constructor(props: IStateCards) {
    super(props);
  }
  render() {
    return (
      <section className="cards" data-testid="card-list">
        {this.props.cards.map((card, i) => {
          return <CardItem card={card} key={card.id || i} />;
        })}
      </section>
    );
  }
}

export default CardList;
