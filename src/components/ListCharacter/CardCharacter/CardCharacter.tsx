import React from 'react';
import '../../CardList/CardList.scss';
import { ICardCharacter } from './CardCharacter.type';

function CardCharacter(props: ICardCharacter) {
  const { card, onShowModal } = props;
  const onClick = () => {
    if (onShowModal) {
      onShowModal(card);
    }
  };
  return (
    <div className="card" data-testid="CardCharacter" onClick={onClick}>
      <h2>{card.name}</h2>
      {card.race && <div>Race: {card.race}</div>}
      {card.gender && <div>Gender: {card.gender}</div>}
    </div>
  );
}

export default CardCharacter;
