import React from 'react';
import { render, screen } from '@testing-library/react';
import cards from '../../data/data';
import CardItem from './CardItem';

describe('<CardItem />', () => {
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
