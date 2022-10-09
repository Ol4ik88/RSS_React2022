import CardList from 'components/CardList/CardList';
import Form from 'components/Form/Form';
import React from 'react';
import { ICard, IStateCards, PropsComponent } from 'type/type';

class FormPage extends React.Component<PropsComponent, IStateCards> {
  constructor(props: PropsComponent) {
    super(props);
    this.state = {
      cards: [] as ICard[],
    };
  }

  addCard = (card: ICard) => {
    this.setState(({ cards }) => {
      const listOldCards = [...cards];
      return { cards: [...listOldCards, card] };
    });
  };

  render() {
    return (
      <section className="form-page container" data-testid="FormPage">
        <h2> It&apos;s FormPage</h2>
        <Form addCard={this.addCard} />
        <CardList cards={this.state.cards} />
      </section>
    );
  }
}

export default FormPage;
