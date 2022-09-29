import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';
import cards from '../../data/data';
import CardList from './CardList';
import CardItem from './CardItem';

describe('Renders cards', () => {
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

  test('renders card elements', () => {
    render(<CardItem card={cards[0]} />);
    const foto = screen.getByRole('img');
    expect(foto).toBeInTheDocument();
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
    const description = screen.getByText(/text/i);
    expect(description).toBeInTheDocument();
  });
});
