import React from 'react';
import { render, screen } from '@testing-library/react';
import CardCharacter from './CardCharacter';
import { fakeCards } from 'data/data';
import userEvent from '@testing-library/user-event';

describe('<CardCharapter />', () => {
  test('renders card elements', () => {
    render(<CardCharacter card={fakeCards.docs[0]} onShowModal={() => jest.fn} />);
    const name = screen.getByRole('heading');
    expect(name).toBeInTheDocument();
    const race = screen.getByText(/race/i);
    expect(race).toBeInTheDocument();
    const gender = screen.getByText(/gender/i);
    expect(gender).toBeInTheDocument();
  });
  test('click on the card calls onClick', () => {
    const onClick = jest.fn();
    render(<CardCharacter card={fakeCards.docs[0]} onShowModal={onClick} />);
    const cards = screen.getAllByTestId('CardCharacter');
    userEvent.click(cards[0]);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
