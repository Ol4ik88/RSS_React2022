import React from 'react';
import { render, screen } from '@testing-library/react';
import CardCharacter from './CardCharacter';
import { fakeCards } from 'data/data';
import userEvent from '@testing-library/user-event';

describe('<CardCharacter />', () => {
  const onShowModalMock = jest.fn();
  test('should render name', () => {
    render(<CardCharacter card={fakeCards.docs[0]} onShowModal={onShowModalMock} />);
    const name = screen.getByText('Aegnor');
    expect(name).toBeInTheDocument();
  });
  test('should render race', () => {
    render(<CardCharacter card={fakeCards.docs[0]} onShowModal={onShowModalMock} />);
    const race = screen.getByText(/race/i);
    expect(race).toBeInTheDocument();
  });
  test('should render gender', () => {
    render(<CardCharacter card={fakeCards.docs[0]} onShowModal={onShowModalMock} />);
    const gender = screen.getByText(/gender/i);
    expect(gender).toBeInTheDocument();
  });
  test('click on the card calls onClick', () => {
    render(<CardCharacter card={fakeCards.docs[0]} onShowModal={onShowModalMock} />);
    const cards = screen.getAllByTestId('CardCharacter');
    userEvent.click(cards[0]);
    expect(onShowModalMock).toHaveBeenCalled();
  });
});
