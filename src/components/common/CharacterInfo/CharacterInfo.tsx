import { ICardCharacter } from 'components/ListCharacter/CardCharacter/CardCharacter.type';
import React from 'react';

function CharacterInfo({ card }: ICardCharacter) {
  return (
    <>
      {card.race && <div>Race: {card.race}</div>}
      {card.gender && <div>Gender: {card.gender}</div>}
      {card.height && <div>Height: {card.height}</div>}
      {card.birth && <div>Birth: {card.birth}</div>}
      {card.spouse && <div>Spouse: {card.spouse}</div>}
      {card.death && <div>Death: {card.death}</div>}
      {card.realm && <div>Realm: {card.realm}</div>}
      {card.hair && <div>Hair: {card.hair}</div>}
      {card.wikiUrl && <div>Wiki Url: {card.wikiUrl}</div>}
    </>
  );
}

export default CharacterInfo;
