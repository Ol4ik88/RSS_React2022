import React from 'react';
import CardCharacter from './CardCharacter/CardCharacter';
import '../CardList/CardList.scss';
import { ICardListAPI } from './ListCharacter.type';

class ListCharacter extends React.Component<ICardListAPI> {
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
