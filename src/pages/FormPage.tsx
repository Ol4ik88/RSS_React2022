import CardList from 'components/CardList/CardList';
import Form from 'components/Form/Form';
import React from 'react';
import { selectFormState, setFormCards } from 'store/formSlice';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { ICard } from 'type/type';

function FormPage() {
  const { cards } = useAppSelector(selectFormState);
  const dispatch = useAppDispatch();

  const addCard = (card: ICard) => {
    dispatch(setFormCards([...cards, card]));
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
