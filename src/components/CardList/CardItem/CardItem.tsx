import React from 'react';
import '../CardList.scss';
import { ICardItem } from './CardItem.type';

function CardItem(props: ICardItem) {
  return (
    <div className="card" data-testid="card">
      <img src={props.card.img as string} className="foto" alt="foto" />
      <h2>{props.card.title || props.card.name}</h2>
      {props.card.birthday && <div>birthday: {props.card.birthday}</div>}
      {props.card.kind && <div>kind: {props.card.kind}</div>}
      {props.card.sex && <div>sex: {props.card.sex}</div>}
      {props.card.description && <div>description: {props.card.description}</div>}
    </div>
  );
}

export default CardItem;
