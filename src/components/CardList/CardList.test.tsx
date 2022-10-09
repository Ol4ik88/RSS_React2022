import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';
import cards from '../../data/data';
import CardList from './CardList';

describe('<CardList />', () => {
  test('renders card list', () => {
    render(<Home />);
    const cardList = screen.getByTestId('card-list');
    expect(cardList).toBeInTheDocument();
  });
  test('renders all cards', () => {
    render(<CardList cards={cards} />);
    const cardList = screen.getAllByTestId('card');
    expect(cardList).toHaveLength(7);
  });
});
