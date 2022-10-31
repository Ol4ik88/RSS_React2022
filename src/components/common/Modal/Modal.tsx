import React from 'react';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
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
        <h2>{card.name}</h2>
        <CharacterInfo card={card} />
      </div>
    </div>
  );
}

export default Modal;
