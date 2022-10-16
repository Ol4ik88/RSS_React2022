import React from 'react';
import CardCharacter from './CardCharacter/CardCharacter';
import '../CardList/CardList.scss';
import { IListCharacter } from './ListCharacter.type';

class ListCharacter extends React.Component<IListCharacter> {
  render() {
    return (
      <section className="cards" data-testid="ListCharacter">
        {this.props.cards.map((card) => {
          return <CardCharacter card={card} key={card._id} onShowModal={this.props.onShowModal} />;
        })}
      </section>
    );
  }
}

export default ListCharacter;
