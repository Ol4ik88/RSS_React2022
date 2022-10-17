import React from 'react';
import CardCharacter from './CardCharacter/CardCharacter';
import '../CardList/CardList.scss';
import { IListCharacter } from './ListCharacter.type';

function ListCharacter(props: IListCharacter) {
  return (
    <section className="cards" data-testid="ListCharacter">
      {props.cards.map((card) => {
        return <CardCharacter card={card} key={card._id} onShowModal={props.onShowModal} />;
      })}
    </section>
  );
}

export default ListCharacter;
