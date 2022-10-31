import React from 'react';
import CardCharacter from './CardCharacter/CardCharacter';
import '../CardList/CardList.scss';
import { ICharactersList } from './CharactersList.type';

function CharactersList(props: ICharactersList) {
  return (
    <>
      <h2>Character Information about The Lord of the Rings</h2>
      <section className="cards">
        {props.cards.map((card) => {
          return <CardCharacter card={card} key={card._id} />;
        })}
      </section>
    </>
  );
}

export default CharactersList;
