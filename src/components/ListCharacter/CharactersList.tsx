import React from 'react';
import CardCharacter from './CardCharacter/CardCharacter';
import '../CardList/CardList.scss';
import { ICharactersList } from './CharactersList.type';

class CharactersList extends React.Component<ICharactersList> {
  render() {
    return (
      <>
        <h2>Character Information about The Lord of the Rings</h2>
        <section className="cards" data-testid="CharactersList">
          {this.props.cards.map((card) => {
            return (
              <CardCharacter card={card} key={card._id} onShowModal={this.props.onShowModal} />
            );
          })}
        </section>
      </>
    );
  }
}

export default CharactersList;
