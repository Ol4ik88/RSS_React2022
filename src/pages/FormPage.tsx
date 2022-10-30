import CardList from 'components/CardList/CardList';
import Form from 'components/Form/Form';
import React from 'react';
import useAppContext from 'store/appContext';
import { ICard } from 'type/type';

function FormPage() {
  const { formData, saveFormResult } = useAppContext();
  const { cards } = formData;

  const addCard = (card: ICard) => {
    saveFormResult([...cards, card]);
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
