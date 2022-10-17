import React from 'react';
import '../CardList.scss';
import { ICardItem } from './CardItem.type';

function CardItem({ card }: ICardItem) {
  const { img, title, name, birthday, kind, sex, description } = card;
  return (
    <div className="card" data-testid="card">
      {img && <img src={img} className="foto" alt="foto" />}
      <h2>{title || name}</h2>
      {birthday && <div>birthday: {birthday}</div>}
      {kind && <div>kind: {kind}</div>}
      {sex && <div>sex: {sex}</div>}
      {description && <div>description: {description}</div>}
    </div>
  );
}

export default CardItem;
