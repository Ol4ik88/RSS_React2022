import React from 'react';
import { IPropsCards } from 'type/type';
import CardItem from './CardItem/CardItem';
import './CardList.scss';
function CardList(props: IPropsCards) {
  return (
    <section className="cards" data-testid="card-list">
      {props.cards.map((card) => {
        return <CardItem card={card} key={card.id || `${card.birthday} + ${card.name}`} />;
      })}
    </section>
  );
}

export default CardList;
