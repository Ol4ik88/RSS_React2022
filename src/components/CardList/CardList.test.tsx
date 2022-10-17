import React from 'react';
import { render, screen } from '@testing-library/react';
import { cards } from '../../data/data';
import CardList from './CardList';

describe('<CardList />', () => {
  test('should render all cards', () => {
    render(<CardList cards={cards} />);
    const cardList = screen.getAllByTestId('card');
    expect(cardList).toHaveLength(7);
  });
});
