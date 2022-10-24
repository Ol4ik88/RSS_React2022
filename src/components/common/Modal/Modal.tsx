import CardCharacter from 'components/ListCharacter/CardCharacter/CardCharacter';
import React from 'react';
import './Modal.scss';
import { IPropModal } from './Modal.type';

function Modal(props: IPropModal) {
  const { isModalActive, setActive, card } = props;
  return (
    <div
      className={isModalActive ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
      data-testid="modal-overlay"
    >
      <div className="modal__close-btn"></div>
      <div
        className={isModalActive ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <CardCharacter card={card} key={card._id} />
        {card.height && <div>Height: {card.height}</div>}
        {card.birth && <div>Birth: {card.birth}</div>}
        {card.spouse && <div>Spouse: {card.spouse}</div>}
        {card.death && <div>Death: {card.death}</div>}
        {card.realm && <div>Realm: {card.realm}</div>}
        {card.hair && <div>Hair: {card.hair}</div>}
        {card.wikiUrl && <div>Wiki Url: {card.wikiUrl}</div>}
      </div>
    </div>
  );
}

export default Modal;
