import React from 'react';
import '../../CardList/CardList.scss';
import { ICardCharacter } from './CardCharacter.type';

class CardCharacter extends React.Component<ICardCharacter> {
  render() {
    const { card, onShowModal } = this.props;
    return (
      <div
        className="card"
        data-testid="CardCharacter"
        onClick={() => {
          onShowModal(card);
        }}
      >
        <h2>{card.name}</h2>
        {card.race && <div>race: {card.race}</div>}
        {card.gender && <div>gender: {card.gender}</div>}
      </div>
    );
  }
}

export default CardCharacter;
