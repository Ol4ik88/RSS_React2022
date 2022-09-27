import React from 'react';
import { ICardItem } from 'type/type';
import './CardList.scss';

function CardItem(props: ICardItem) {
  return (
    <div className="card">
      <img src={props.card.img} className="foto" alt="foto" />
      <h2>{props.card.title}</h2>
      <p>{props.card.description}</p>
    </div>
  );
}

export default CardItem;
