import CardList from 'components/CardList/CardList';
import Form from 'components/Form/Form';
import React, { useState } from 'react';
import { ICard } from 'type/type';

function FormPage() {
  const [cards, setCards] = useState<ICard[]>([]);

  const addCard = (card: ICard) => {
    setCards([...cards, card]);
  };

  return (
    <section className="form-page container">
      <h2> It&apos;s FormPage</h2>
      <Form addCard={addCard} />
      <CardList cards={cards} />
    </section>
  );
}

export default FormPage;
